const mongoose = require('mongoose');

const countrySchema = mongoose.Schema(
    {
        name: {
            type: String,
            required:[true, "Please enter a country name"]
        },
        alpha2Code: {
            type: String,
            required:false
        },
        alpha3Code: {
            type: String,
            required:false
        },
        currency: {
            type: String,
            required:false
        },
        currencyCode: {
            type: String,
            required:false
        },
        isDeleted: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true
    }
)

const Country = mongoose.model('country', countrySchema);

module.exports = Country;