const express = require('express');
const passport = require('passport');
const UserMoviesService = require('../services/userMovies');

const validationHandler = require('../utils/middleware/validationHandler');

const { movieIdSchema } = require('../utils/schemas/movies');
const { userIdSchema } = require('../utils/schemas/users');
const { createUserMovieSchema } = require('../utils/schemas/userMovies');
// JWT strategy
require('../utils/auth/strategies/jwt');

function userMoviesAPI(app) {
  const router = express.Router();
  app.use('/api/user-movies', router);
  const userMoviesService = new UserMoviesService();
  router.get('/', passport.authenticate('jwt', { session: false }), validationHandler({ userId: userIdSchema }, 'query'),
    async function(req, res, next) {
      const { userId } = req.query;
      try {
        const userMovies = await userMoviesService.getUserMovies({ userId });
        res.status(200).json({
          data: userMovies,
          message: 'User movies listed'
        })
      } catch(error) {
        next(error);
      }
    }
  );
  router.post('/', passport.authenticate('jwt', { session: false }), validationHandler(createUserMovieSchema), async function(req, res ,next) {
    const { body: userMovie } = req;
    try {
      const createUserMovieId = await userMoviesService.createUserMovie({
        userMovie
      });
      res.status(201).json({
        data: createUserMovieId,
        message: 'User movie created'
      })      
    } catch(err) {
      next(err);
    }
  });

  router.delete('/:userMovieId', passport.authenticate('jwt', { session: false }), validationHandler({ userMovieId: movieIdSchema }, 'params'),
  async function(req, res, next) {
    const { userMovieId } = req.params;
    try {
      const deletedUserMovieId = await userMoviesService.deleteUserMovie({
        userMovieId
      });
    } catch(error) {
      next(error);
    }
    res.status(200).json({
      data: deletedUserMovieId,
      message: 'User movie Id'
    });
  });
}

module.exports = userMoviesAPI;