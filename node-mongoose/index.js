const mongoose = require('mongoose');
const Campsite = require('./models/Campsite');

const url = 'mongodb://localhost:27017/nucampsite';
const connect = mongoose.connect(url, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

connect.then(() => {
    console.log('Connected correctly to server')

    //Creates new document based on Campsite model
    // const newCampsite = new Campsite({
    //     name: 'React Lake Campground',
    //     description: 'test'
    // });

    //Alternate syntax for creating a new document, it also removes the need to have a save method like newCampsite.save()
    Campsite.create({
        name: 'React Lake Campground',
        description: 'test'
    })
        .then(campsite => {
            console.log(campsite);
            return Campsite.findByIdAndUpdate(campsite._id, {
                $set: { description: "Updated Test Document" }
            }, {
                //new: true, will cause the return method to return the new/updated document, instead of the default original
                new: true
            });
        })
        .then(campsite => {
            console.log(campsite);

            campsite.comments.push({
                rating: 5,
                text: "What a magnificent view!",
                author: "tinuis Lorvaldes"
            });

            return campsite.save();
        })
        //If document based on mode is found THEN return the array of objects and log it to the console
        .then(campsite => {
            console.log(campsite);
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