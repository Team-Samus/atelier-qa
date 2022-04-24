const express = require('express');
const console = require('console');
const QARouter = require('./routes');

const app = express();
const port = process.env.PORT || 3000;

app.use('/qa', QARouter);

app.listen(port, () => console.log(`Listening on port ${port}...`));
