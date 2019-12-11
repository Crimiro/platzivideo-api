const express = require('express');
const MoviesService = require('../services/movies');

function moviesAPI(app) {
   const router = express.Router();
   app.use('/api/movies', router);

   const moviesService = new MoviesService();

   router.get('/', async function(req, res, next) {
    const { tags } = req.query;
    try {
      const movies = await moviesService.getMovies({ tags });
      res.status(200).json({
        data: movies,
        message: 'Movie Retrieved'
      })
    } catch(err) {
      next(err);
    }
  });

   router.get('/:movieId', async function(req, res, next) {
     const { movieId } = req.params;
     try {
       const movies = await moviesService.getMovie({ movieId });
       res.status(200).json({
         data: movies,
         message: 'Movie Retrieved'
       })
     } catch(err) {
       next(err);
     }
   });
   router.post('/', async function(req, res, next) {
     const { body: movie } = req;
    try {
      const createMovieId = await moviesService.createMovie({ movie });
      res.status(201).json({
        data: createMovieId,
        message: 'Movie Created'
      })
    } catch(err) {
      next(err);
    }
  });
  router.put('/:movieId', async function(req, res, next) {
    const { movieId } = req.params;
    const { body: movie } = req;
    try {
      const updatedMovieId = await moviesService.updateMovie({ movieId, movie })
      res.status(200).json({
        data: updatedMovieId,
        message: 'Movies Updated'
      })
    } catch(err) {
      next(err);
    }
  });
  router.delete('/:movieId', async function(req, res, next) {
    const { movieId } = req.params;
    try {
      const deletedMovieId = await moviesService.deleteMovie({ movieId });
      res.status(200).json({
        data: deletedMovieId,
        message: 'Movies Deleted'
      })
    } catch(err) {
      next(err);
    }
  });
}

// Implementar el método PATCH en las películas

module.exports = moviesAPI;