const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const shortUrlSchema = new Schema({
    shortUrlID:{
        type:String,
        unique: true,
        require:true,
        trim:true,
        minlength : 5
    },
    shortUrl:{
        type:String,
        unique: true,
        require:true,
        trim:true,
        minlength : 5
    },
    sourceUrl:{
        type:String,
        require:true,
        trim:true,
        minlength : 5
    },
    hit:{
        type:Number,
        require:true                
    }     
}, {
    timestamps: true,
  });

  const ShortUrl = mongoose.model('ShortUrl',shortUrlSchema);

  module.exports = ShortUrl;