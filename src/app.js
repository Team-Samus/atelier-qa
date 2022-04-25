if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const express = require('express');
const console = require('console');

const app = express();
const port = process.env.PORT || 3000;

app.use('/qa', require('./routes'));

app.listen(port, () => console.log(`Listening on port ${port}...`));
