const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

const feedRoutes = require('./routes/feed');
const app = express();

app.use(bodyParser.json()); 

app.use("/feed", feedRoutes);

app.listen(8080);