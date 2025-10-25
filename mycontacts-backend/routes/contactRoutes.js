const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).send('view all contacts');
});

router.post('/', (req, res) => {
  res.status(200).send('add new contact');
});

router.get('/:id', (req, res) => {
  res.status(200).send(`view contact with id ${req.params.id}`);
});

router.put('/:id', (req, res) => {
  res.status(200).send(`update contact with id ${req.params.id}`);
});

router.delete('/:id', (req, res) => {
  res.status(200).send(`delete contact with id ${req.params.id}`);
});

module.exports = router;
