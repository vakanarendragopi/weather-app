package com.dbs.weather.url;

import java.net.MalformedURLException;
import java.net.URL;

import org.springframework.context.annotation.PropertySource;
import org.springframework.stereotype.Component;

@Component
@PropertySource("classpath:weather.properties")
public class WeatherURL {

	static URL uri;

	public static URL getWeatherURL(String city) {
		switch (city) {
		case "Campbell":
			try {
				uri = new URL("https://api.darksky.net/forecast/aae5edbb02f5660b506f6d7edbc218bd/37.2872,121.9500");
			} catch (MalformedURLException e) {

				e.printStackTrace();
			}
			break;
		case "Omaha":
			try {
				uri = new URL("https://api.darksky.net/forecast/aae5edbb02f5660b506f6d7edbc218bd/41.2565,95.9345");
			} catch (MalformedURLException e) {

				e.printStackTrace();
			}
			break;
		case "Austin":
			try {
				uri = new URL("https://api.darksky.net/forecast/aae5edbb02f5660b506f6d7edbc218bd/30.2672,97.7431");
			} catch (MalformedURLException e) {

				e.printStackTrace();
			}
			break;
		case "Niseko":
			try {
				uri = new URL("https://api.darksky.net/forecast/aae5edbb02f5660b506f6d7edbc218bd/42.8048,140.6874");
			} catch (MalformedURLException e) {

				e.printStackTrace();
			}
			break;
		case "Nara":
			try {
				uri = new URL("https://api.darksky.net/forecast/aae5edbb02f5660b506f6d7edbc218bd/34.6851,135.8048");
			} catch (MalformedURLException e) {

				e.printStackTrace();
			}

			break;
		case "Jakarta":
			try {
				uri = new URL("https://api.darksky.net/forecast/aae5edbb02f5660b506f6d7edbc218bd/6.2088,106.8456");
			} catch (MalformedURLException e) {

				e.printStackTrace();
			}
			break;
		}
		return uri;

	}

}
