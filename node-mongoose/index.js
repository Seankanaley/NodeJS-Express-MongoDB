const mongoose = require('mongoose');
const Campsite = require('./models/Campsite');

const url = 'mongodb://localhost:27017/nucampsite';
const connect = mongoose.connect(url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

connect.then(() => {
    console.log('Connectd correctly to server')

    //Creates new document based on Campsite model
    const newCampsite = new Campsite({
        name: 'React Lake Campground',
        description: 'test'
    });

    //Saves document to Campsites collection
    newCampsite.save()
        .then(campsite => {
            console.log(campsite);
            //returns documents based on the Campsite model and return in an array of objects
            return Campsite.find();
        })
        //If document based on mode is found THEN return the array of objects and log it to the console
        .then(campsites => {
            console.log(campsites);
            return Campsite.deleteMany();
        })
        .then(() => {
            return mongoose.connection.close();
        })
        .catch(err => {
            console.log(err);
            mongoose.connection.close();
        });
});