const mongoose = require('mongoose');

const countrySchema = mongoose.Schema(
    {
        name: {
            type: String,
            required:[true, "Please enter a country name"]
        },
        alphaCode2: {
            type: String,
            required:true
        },
        alphaCode3: {
            type: String,
            required:true
        },
        currency: {
            type: String,
            required:true
        }
    }
)

const Country = mongoose.model('country', countrySchema);

module.exports = Country;