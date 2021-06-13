const express = require('express');
const bodyParser = require('body-parser');

const PORT = 9999;

const app = express();
app.use(bodyParser.json());

app.post('/sqrt', function(req, res)  {
    res.json({ message: Math.sqrt(req.body.sqrt) + ' is the square root!' })
})

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
})