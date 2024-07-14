
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the Inspector General Office API');
});

router.use('/auth', require('./auth'));
router.use('/grants', require('./grants'));

module.exports = router;
