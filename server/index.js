const express = require('express');
const bodyParser = require('body-parser');

const PORT = 9999;

const app = express();
app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
})