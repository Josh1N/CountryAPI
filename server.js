const express = require('express')
const mongoose = require('mongoose');
const app = express()


// routes
app.get('/', (req, res) => {
    res.send('Hello country api ')
})

app.get('/country', (req, res) => {
    res.send('Hello country  ')
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
