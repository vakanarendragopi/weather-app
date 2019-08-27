import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private _http:HttpClient) { }
  getLocationData(location){
    // let url='https://api.darksky.net/forecast/aae5edbb02f5660b506f6d7edbc218bd/37.8267,-122.4233';
    // let url="https://api.darksky.net/forecast/aae5edbb02f5660b506f6d7edbc218bd/37.8267,-122.4233";
    let url='http://localhost:8080/getWeather/'+location;
    return this._http.get<any>(url);
    // let url="http://localhost:1000/api/login";
    // let postData={
    //   "username":"mailsix",
    //   "password":"mailsix"
    // }
    // return this._http.post<any>(url, postData)
  }
  getStoredData(location){
    let url='http://localhost:2000/getWeather';
    return this._http.post<any>(url,{"location":location});
  }
  setWeatherData(postData){
    console.log("Set Object:",postData);
    let url='http://localhost:2000/setWeather';
    return this._http.post<any>(url,postData);
  }
}
