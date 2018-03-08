const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const path = require('path');

const app = express();
const port = process.env.LOLTEAM_FRONT_PORT || 8080;

app.use(express.static(path.join(__dirname, 'dist')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});
app.set('port', port);

http
  .createServer(app)
  .listen(port, () => console.log(`Running on localhost:${port}`));
