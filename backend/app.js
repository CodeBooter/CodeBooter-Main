const express = require('express');
const app = express();
const certificateRoute = require('./Routes/certificateRoutes');

app.use(express.json());




app.use('/api/v1', certificateRoute);
module.exports = app;