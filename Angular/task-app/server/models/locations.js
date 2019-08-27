const mongoose = require('mongoose');
const locationSchema = mongoose.Schema({
    location:{
        type:String,
        required: true
    },
    info:{
        type:Object,
        required: true
    },
    date:{
        type:String
    }
});
module.exports=mongoose.model('locations',locationSchema);