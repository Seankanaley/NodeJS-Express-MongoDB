const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const campsiteSchema = new Schema({
    name:  {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    }
}, {
    //Adds a time stamp the creates a created at and updated at timestamp columns
    timestamps: true
});

const Campsite = mongoose.model('Campsite', campsiteSchema);

module.exports = Campsite;