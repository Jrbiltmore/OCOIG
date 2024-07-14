
const express = require('express');
const router = express.Router();
const { createGrant, getGrants, getGrantById, updateGrant, deleteGrant } = require('../controllers/grantController');
const auth = require('../middleware/auth');

router.post('/', auth, createGrant);
router.get('/', auth, getGrants);
router.get('/:id', auth, getGrantById);
router.put('/:id', auth, updateGrant);
router.delete('/:id', auth, deleteGrant);

module.exports = router;
