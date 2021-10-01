const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

const app = express();

mongoose.connect('mongodb+srv://victornegromonte:vm140498@cluster0.3i5zq.mongodb.net/turismap?retryWrites=true&w=majority');

app.use(cors());
app.use(express.json());
app.use(routes);



app.listen(3333);