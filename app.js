const express = require('express');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const compression = require('compression');

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController'); 

const userRouter = require('./routes/userRoutes');
const recipeRouter = require('./routes/recipeRoutes');

const app = express();

app.use(cookieParser());

/* MIDDLEWARES: */
app.use(compression());
app.use(helmet());

app.use(express.json());
app.use(mongoSanitize());
app.use(xss());

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

/* ROUTES: */
app.use('/api/v1/users', userRouter);
app.use('/api/v1/recipes', recipeRouter);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

app.use(globalErrorHandler);

module.exports = app;