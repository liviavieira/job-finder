const express = require('express');
const router  = express.Router();
const Job     = require('../models/Job');

// test route
router.get('/test', (req, res) => {
  res.send('deu certo');
});

// add job
router.post('/add', (req, res) => {
  let { title, salary, company, description, email, new_job } = req.body;

  // insert
  Job.create({
    title,
    salary,
    company,
    description,
    email,
    new_job
  })
  .then(() => res.redirect('/'))
  .catch(err => console.log(err));
});

module.exports = router