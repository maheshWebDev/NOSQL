const mongoose= require('mongoose');

const movieSchema = new mongoose.Schema({
    name : {
        type:String,
        required :[true,"name is required field"]
    },
    description:String,
    duration:{
        type : String,
        required:[true,"duration is required field"]
    },
    rating:{
        type:Number,
        default:1.0
    },
});

const Movie = mongoose.model('Movie',movieSchema);

module.exports = Movie;