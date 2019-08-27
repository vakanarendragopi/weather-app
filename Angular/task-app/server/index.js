var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var mongoose = require("mongoose");
var moment = require("moment");
var locations = require('./models/locations');
require('dotenv/config');
var app=express();
app.use(bodyParser.json());
app.use(cors());
app.post('/getWeather',async (req,res,next)=>{
    console.log("Request:",req.body);
    // try{
        
        var today_start = moment().utc().format('YYYY-MM-DD');
        // var end_date=moment(today_start+' 23:59:59').utc();
        // var start_date=moment.utc(today_start+' 00:00:00');
        // var today_end = Date();
        console.log("Start:",today_start);
        // console.log("Start Today:",start_date);
        // console.log("End Today:",end_date);
        // console.log("End Today:",today_end);
        var info=await locations.findOne({location:req.body.location,date:{$gte:today_start,$lte:today_start}})
        // console.log("Mongo Get Response:",info);
        if(info){
            var response={
                "location":info.location,
                "info": info.info
            } 
            // console.log("Get Response:",response);
            return res.status(200).json(response);  
        }else{
            return res.status(200).json({"message":'No Locations found'});
        }
    // }
    // catch(err){   
    //     return res.status(500).json({"message":err});
    // }
});
app.post('/setWeather',(req,res,next)=>{
    console.log("Set Request:",req.body);
    let createdAt=moment().utc().format('YYYY-MM-DD');
    console.log("createdAt:",createdAt);
    if(req.body.info && req.body.location){
        const location=new locations({
            location:req.body.location,
            info:req.body.info,
            date:createdAt
        });
        location.save()
        .then(data=>{
            var response={
                "location":data.location,
                "info": data.info
            }     
            return res.status(200).json(response);
        })
        .catch(error=>{
            return res.status(500).json({"message":'Something went wrong with saving.'});
        })
    }else{
        return res.status(500).json({"message":'Something went wrong'});
    }
});
mongoose.connect(process.env.DB_CONNECTION,{ useNewUrlParser: true },()=> console.log("Connected Successfully"));
app.listen(2000,(err)=>{
    if(!err)
    {
        console.log("Hitting Port:",2000);
    }
})