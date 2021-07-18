const express = require('express');
const bodyParser = require('body-parser');
const { rString } = require('../r-string'); 

const PORT = 9999;

const app = express();
app.use(bodyParser.json());
const db = {};

app.post ('/links', function (req, res) {
  if (
    typeof (req.body.link) !== 'string'
    || (req.body.link) === ''
    || !/^https?:\/\//.test (req.body.link)
  ) { 
    res.status(400).json ({ error: 'body.link is not a valid url'})
    return;
  }
  const rand = rString (5);
  db [rand] = req.body.link;
  console.log (db);
  res.json ({
    rand, 
  });
}); 

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});