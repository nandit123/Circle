const express = require('express')
const app = express();
const main = require('./app')

app.use("/", main);

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
});
