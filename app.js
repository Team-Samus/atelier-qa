const express = require('express');
const console = require('console');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hi World!');
});

app.listen(port, () => console.log(`Listening on port ${port}...`));
