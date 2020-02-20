const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    rating: {
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
}, {
    //Adds a time stamp the creates a created at and updated at timestamp columns
    timestamps: true
});

const campsiteSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    //Create the ability for every campsite to have multiple comments, with the commentSchema stored inside as an array
    comments: [commentSchema]
}, {
    //Adds a time stamp the creates a created at and updated at timestamp columns
    timestamps: true
});

const Campsite = mongoose.model('Campsite', campsiteSchema);

module.exports = Campsite;