const express = require('express');

const {createMovie,getAllMovies,getMovie,updateMovies,deleteMovie}= require('../Controller/movieController');

const router = express.Router();

router.get('/movies',getAllMovies);

router.get('/movie/:id',getMovie);

router.post('/movie',createMovie);

router.patch('/movies/:id',updateMovies)

router.delete("/movie/:id",deleteMovie);

module.exports = router;
