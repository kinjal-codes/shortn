const router = require('express').Router();
const isURL = require('isURL');
const ShortUrl = require('../models/shorturl.model');
const Visitor = require('../models/visitor.model');
const cryptoRandomString = require("crypto-random-string");
const geoip = require('geoip-lite');
require('dotenv').config();

router.route('/shorturl').get((req, res) => {
    ShortUrl.find().sort({'createdAt':'desc'})
      .then(urlList => res.json(urlList))
      .catch(err => res.status(400).json('Error: ' + err));
  });
 
router.route('/:id').get((req, res) => {
     const id = req.params.id;
     ShortUrl.findOne({
         shortUrlID : id
     },
     function(err,result){        
        if (result) {
            let visitorIP = req.connection.remoteAddress;
            let geoObject = geoip.lookup(visitorIP);
            let location;
            if(geoObject!=null){
                location = geoObject.city + geoObject.region + geoObject.country;
            }            
            const newVisitor = new Visitor({
                shortUrl:id,
                visitorIP,
                referrer:req.headers.referer,
                location
            });  

            newVisitor.save()

            return res.redirect(result.sourceUrl);
        } else {
            return res.redirect("/error");
        }
    });     
});

router.route('/shorturl').post((req, res) => {
    const sourceUrl = req.body.sourceUrl;
    const shortUrlID = cryptoRandomString({length: 6})
    const shortUrl = process.env.BASE_DOMAIN + "/" + shortUrlID;   
   
    const newShortUrl = new ShortUrl({
        shortUrlID,
        shortUrl,
        sourceUrl,
        hit:0
    });  
        
        
    newShortUrl.save()
    .then(() => res.json({shortUrl,sourceUrl,success:true,message:"Success! URL shortened."}))
    .catch(err => res.status(400).json({message: "Oops... There was an error while generating url.",success:false}));
  
  });
  
  module.exports = router;