const express = require('express');
const router = express.Router();

app.get('/', (req, res) => {
  res.render('/', {
    title: 'Home'
  })
});

export default router;
