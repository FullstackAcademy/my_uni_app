const express = require('express');
const app = express();
const path = require('path');
const client = require('./db/client');

app.use('/dist', express.static(path.join(__dirname, '../dist')));

app.get('/', (req, res)=> res.sendFile(path.join(__dirname, '../static/index.html')));

app.get('/api/things', async(req, res, next)=> {
  try {
    res.send((await client.query('SELECT * FROM things')).rows);
  }
  catch(ex){
    next(ex);
  }
});

app.use((err, req, res, next)=> {
  console.log(err);
  res.status(err.status || 500).send({ error: err.message });
});

module.exports = app;
