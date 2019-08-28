package com.dbs.weather.controller;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import java.util.logging.Logger;
import com.dbs.weather.url.WeatherURL;

/***
 * This Class used as a front controller to receive the requests and provide the weather information
 * depending on the location provided
 */

@RestController
public class WeatherController {
	private static final Logger LOGGER = Logger.getLogger(WeatherController.class.getName());
	/***************
	  * returns the weather data for corresponding city
	  * @param city
	  * @return
	  */
	@CrossOrigin(origins="http://localhost:4200")
 	@RequestMapping(value = "/getWeather/{city}", method = RequestMethod.GET, produces = "application/json")
	public String data(@PathVariable String city) {
		System.out.println("City = "+city);
		LOGGER.info("WeatherController :: getWeatherApp()");
		LOGGER.info("City Name: "+city);
 		String output = null;
		String finalOutput = "";
		  try {
			  
//			URL url = new URL("https://api.darksky.net/forecast/aae5edbb02f5660b506f6d7edbc218bd/42.3601,-71.0589");
			URL url = WeatherURL.getWeatherURL(city); 
			LOGGER.info("fetched url = "+url);
			HttpURLConnection conn = (HttpURLConnection) url.openConnection();
		
			conn.setRequestMethod("GET");
			
			conn.setRequestProperty("Accept", "application/json");

			if (conn.getResponseCode() != 200) {
				throw new RuntimeException("Failed : HTTP error code : "
						+ conn.getResponseCode());
			}

			BufferedReader br = new BufferedReader(new InputStreamReader(
				(conn.getInputStream())));

			
			System.out.println("Output from Server .... \n");
			while ((output = br.readLine()) != null) {
				finalOutput+=output;
				System.out.println(output);
				LOGGER.info("Server Output = "+output);
			}

			conn.disconnect();
			  LOGGER.info("Connection Disconnected..!!");

		  } catch (MalformedURLException e) {

			e.printStackTrace();

		  } catch (IOException e) {

			e.printStackTrace();

		  }
		  return finalOutput;
		}
}
