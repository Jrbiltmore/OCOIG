
const express = require('express');
const router = express.Router();
const Grant = require('../models/Grant');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');

// Create a new grant
router.post('/', auth, async (req, res) => {
  try {
    const grant = new Grant(req.body);
    await grant.save();
    res.status(201).send(grant);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Get all grants
router.get('/', auth, async (req, res) => {
  try {
    const grants = await Grant.find();
    res.json(grants);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Get a grant by ID
router.get('/:id', auth, async (req, res) => {
  try {
    const grant = await Grant.findById(req.params.id);
    if (!grant) {
      return res.status(404).send('Grant not found');
    }
    res.json(grant);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Update a grant
router.put('/:id', auth, async (req, res) => {
  try {
    const grant = await Grant.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!grant) {
      return res.status(404).send('Grant not found');
    }
    res.json(grant);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Delete a grant
router.delete('/:id', [auth, admin], async (req, res) => {
  try {
    const grant = await Grant.findByIdAndDelete(req.params.id);
    if (!grant) {
      return res.status(404).send('Grant not found');
    }
    res.send('Grant deleted');
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
