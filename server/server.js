const express = require('express');
const path = require('path');

const publicPath = path.join(__dirname, "../public");
const app = express();

app.use(express.static(publicPath));





var port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Spinning up server on port ${port}`);
});
