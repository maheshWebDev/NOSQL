const { Model } = require('mongoose');
const Movie = require('../Model/movieModel');

module.exports.createMovie =async (req,res)=>{
    try {
       const doc = await Movie.create(req.body)
       res.status(200).json({message:"created succesfuly",success:true})    
    
    } catch (err) {
        res.status(400).json({message:err.message,status:"fail"})
    }
  
}

module.exports.getAllMovies= async(req,res)=>{

    try {
       const movies = await Movie.find()
       res.status(200).json({status:"successful",data:{movies}});
    } catch (err) {
        res.status(400).json({status:"fail",message:err.message});
    }

};

module.exports.getMovie=async (req,res)=>{
try {
    const movie = await Movie.findById(req.params.id);
    res.status(200).json({status:"successful",data:{movie}});
} catch (error) {
    res.status(404).json({status:"fail",message:error.message});
}


}

module.exports.updateMovies = async(req,res)=>{
    try {
      const movie = await  Movie.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true});
      res.status(200).json({status:"success",data:{movie}});
    } catch (error) {
        res.status(404).json({status:"fail",message:error.message})
    }
}

module.exports.deleteMovie = async(req,res)=>{
    try {
       const count = await Movie.findByIdAndDelete(req.params.id);
       res.status(200).json({status:"success",data:{count}});
    } catch (error) {
        res.status(404).json({status:"fail",message:error.message});
    }
}