const express = require('express');
const bodyParser = require('body-parser');

const PORT = 9999;

const app = express();
app.use(bodyParser.json());

// TODO: add new route POST /name { "name": "JP" }, that prints in the server the name, and responds with { "message": "hello JP" }

app.get('/hello', function(req, res)  {
  res.json({ message: 'hello world!' })
});

app.post('/name', function(req, res)  {
  console.log(req.body);
  //res.json({ message: 'Hello ' + req.body.name + ' you have ' + req.body.age + ' years old!' })

  if (
    typeof(req.body.name) !== 'String'
    || typeof(req.body.age) !== 'number'
  ) {
    res.status(400).json ({error: 'digite os valores corretos, maluco!'});
    return;
  }
  res.json({ message: 'Hello ' + req.body.name + ' you have ' + req.body.age + ' years old!' })
  //fazer if para cada um
});

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
})