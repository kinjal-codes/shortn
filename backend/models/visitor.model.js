const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const visitorSchema = new Schema({
    shortUrl:{
        type:String,       
        require:true,
        trim:true,
        minlength : 5
    },    
    referrer:{
        type:String,               
        trim:true,
        minlength : 5
    },
    visitorIP:{
        type:String,       
        require:true,
        trim:true,
        minlength : 3
    },
    location:{
        type:String,  
        trim:true,
        minlength : 3
    }    
}, {
    timestamps: true,
  });

  const Visitor = mongoose.model('Visitor',visitorSchema);

  
  module.exports = Visitor;