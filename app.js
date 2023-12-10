const express = require('express');
var url  = require('url');
const fs = require('fs');
const mongoose = require('mongoose');
const Country = require('./models/country');
const dbConnection = require("./config.js").db;
const port = require("./config.js").app.port;
const app = express();

app.use(express.json());

// Routes:
// Add a country
app.post('/countries',  async (req, res) => {
    try {
        const country = await Country.create(req.body);
        res.status(200).json(country);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
})  

// Retrieves all countries
// Allows filter on countries by currency code
app.get('/countries', async(req, res) => {
    try {
        const { currencyCode } = req.query;
        const filter = {}
        if (currencyCode) {
            filter.currencyCode = currencyCode
        }

        const countries = await Country.find(filter);
        res.status(200).json(countries);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

// Retrieve country by alpha2Code
app.get('/countries/:alpha2Code', async(req, res) => {
    try {
        const {alpha2Code} = req.params;
        const country = await Country.find({alpha2Code: alpha2Code});
        res.status(200).json(country);

    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

// Update country
app.put('/countries/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const country = await Country.findByIdAndUpdate(id, req.body);

        // if the country is not found in the database
        if(!country) {
            return res.status(404).json({message: `cannot find any country with ID ${id}`});
        }
        const updatedCountry = await Country.findById(id);
        res.status(200).json(updatedCountry);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

// Delete country
app.delete('/countries/:name', async(req, res) => {
    try {
        const {name} = req.params;
        const filter = {name: name};
        // using findByIdAndUpdate() with isDeleted for soft deletion instead of findByIdAndDelete()
        const country = await Country.findOneAndUpdate(filter, {isDeleted: true});

        if(!country){
            return res.status(404).json({message: `cannot find any country with ID ${id}`});
        }
        res.status(200).json({message: `successfully deleted ${country}`});

    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

mongoose.
connect(dbConnection.MONGODB_URI)
.then(() => {
    console.log('Successfully connected to MongoDB');  
app.listen(port, () => {    
    console.log('Country API listening on port 3000');
   });
}).catch(err => {
    // Switch off VPN if failing to connect
    console.log('Error connecting to MongoDB' + err.message);
});

module.exports = app;