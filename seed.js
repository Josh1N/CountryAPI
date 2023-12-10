const mongoose = require("mongoose");
const Country = require("./models/country");
const dbConnection = require("./config.js").db;
const data = require("./data/countries.json");
let resultData;
let saveCounter = 0;

mongoose.connect(dbConnection.MONGODB_URI)
.then(() => console.log("MongoDB connection success"))
.catch(error => console.log(error));

try{
   resultData = data.countries;
   for (let i = 0; i < 5; i++) {
      let country = new Country({
         name: resultData[i].name,
         alpha2Code: resultData[i].alpha2Code,
         alpha3Code: resultData[i].alpha3Code,
         currency: resultData[i].currency,
         currencyCode: resultData[i].currencyCode
      });
      
      country.save();
      console.log("Saved: " + country);
      saveCounter++;
  
      if (saveCounter === 5) {      
        mongoose.disconnect()
         .then(() => console.log("Countries saved succesfully and mongodb disconnected"))
         .catch(error => console.log(error));
      }
   }
} catch (error) {
   console.log(error);
}
