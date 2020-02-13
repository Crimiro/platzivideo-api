const express = require('express');

const app = express();

const { config } = require('./config/index');
const authApi = require('./routes/auth');
const moviesAPI = require('./routes/movies');
const userMoviesApi = require('./routes/userMovies')

const { logErrors, wrapErrors, errorHandler } = require('./utils/middleware/errorHandlers');
const notFoundHandler = require('./utils/middleware/notFoundHandler');

app.use(express.json());
// routes
authApi(app);
moviesAPI(app);
userMoviesApi(app);
// Catch 404
app.use(notFoundHandler);
// Siempre al final
// Errors Middleware
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.listen(config.port, function() {
  console.log(`Listening http://localhost:${config.port}`);
});