const express = require('express');
const router = express.Router();

app.get('/', (req, res) => {
  res.render('/', {
    title: 'dashboard'
  })
});

export default router;
