const express = require('express');
const console = require('console');

const qaRouter = require('./routes');

const app = express();
const port = process.env.PORT || 3000;

app.use('/qa', qaRouter);

app.listen(port, () => console.log(`Listening on port ${port}...`));
