import { Component, OnInit } from '@angular/core';
import { CommonService } from './services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'task-app';
  locations:any;
  storedResponse:any;
  livedata:any;
  icon:any;
  constructor(private commonservice:CommonService){
    this.locations=[
      {
        label:'Campbell',
        value:'Campbell'
      },
      {
        label:'Omaha',
        value:'Omaha'
      },
      {
        label:'Austin',
        value:'Austin'
      },
      {
        label:'Niseko',
        value:'Niseko'
      },
      {
        label:'Nara',
        value:'Nara'
      },
      {
        label:'Jakarta',
        value:'Jakarta'
      }
    ];
  }
  ngOnInit(){
    this.fetchWeatherData('Campbell');
  }
  fetchWeatherData(value:string){
    console.log(value);
      //let postdata=JSON.stringify(this.loginForm.value);
      let location=value;
      this.commonservice.getStoredData(location)
      .subscribe(
        async response=>{
          console.log(response);
          if(typeof response!='undefined' && response.info){
            this.livedata=response;
          }
          else{
            try{
              var liveresponse=await this.getWeatherData(location);
              console.log("liveresponse:",liveresponse)
              // if(liveresponse){
              //   console.log("Live Data:",this.livedata);
              //   this.setWeatherData(location, this.livedata);
              // }
              // else
              //   console.log("Error");
              // this.storedResponse=this.livedata;
            }
            catch(err){
              console.log("Error:",err);
            }
          }
        },
        error=>{
          console.log(error);
        }
      );
      // this.commonservice.getLocationData(location)
      // .subscribe(
      //   response=>{
      //     console.log(response);
      //   },
      //   error=>{
      //     console.log(error);
      //   }
      // );
      
  }
  setWeatherData(location,weatherObject){
    var postData={
      "location":location,
      "info":weatherObject
    }
    this.commonservice.setWeatherData(postData)
      .subscribe(
        response=>{
          console.log("Mongo Response:",response);
          return true;
        },error=>{
          console.log("Mongo Failure Response:",error);
          return false;
        });
  }
  getWeatherData(location){
      return this.commonservice.getLocationData(location)
      .subscribe(
        response=>{
          console.log("Live Response:",response);
          this.setWeatherData(location, response);
          let respObj={
            "location":location,
            "info":response
          };
          this.livedata=respObj;
          return true;
        },
        error=>{
          return false;
        }
      );
      // console.log("Live Result:",result);
      // return result;
  }
  convertF2C(value)
  {
    return (value-32)*(5/9);
  }
  humidity:any = 'p90';
}
