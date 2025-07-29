// index.js
const express = require('express');
const bodyParser = require('body-parser');
const deleteImageRouter = require('./api/delete-image');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// نقاط النهاية
app.use('/', deleteImageRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
