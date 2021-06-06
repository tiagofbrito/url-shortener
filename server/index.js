const express = require('express');
const bodyParser = require('body-parser');

const PORT = 9999;

const app = express();
app.use(bodyParser.json());

// TODO: add new route POST /name { "name": "JP" }, that prints in the server the name, and responds with { "message": "hello JP" }

app.post('/hello', function(req, res) {
  res.json({ message: 'hello world!' });
});

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
