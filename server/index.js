const express = require('express');

const PORT = 9999;
const app = express();


app.get('/hello', function(req, res) {
  res.json({ message: 'hello world!' });
});

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});

