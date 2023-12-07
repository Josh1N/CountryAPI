const express = require('express')
const mongoose = require('mongoose');
const Country = require('./models/countryModel');
const app = express()

app.use(express.json)
// routes
app.get('/country', (req, res) => {
    res.send('Hello country api ')
})

app.post('/country', async (req, res) => {
    try {
        console.log('sending country');
        const country = await Country.create(req.body)
        res.status(200).json(country);
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message});
    }
})  

mongoose.
connect('mongodb+srv://admin:12345Prodigy@countryapi.jlpwgyo.mongodb.net/country-api?retryWrites=true&w=majority')
.then(() => {
    console.log('Successfully connected to MongoDB')    
app.listen(3000, () => {    
    console.log('Country API listening on port 3000')
   });
}).catch(err => {
    // switch off VPN if failing to connect
    console.log('Error connecting to MongoDB' + err.message)
});
