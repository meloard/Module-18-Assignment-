const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

const PORT = 7340;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}!`);
  });
});
