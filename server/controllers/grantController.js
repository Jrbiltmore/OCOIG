
const Grant = require('../models/Grant');

exports.createGrant = async (req, res) => {
  try {
    const grant = new Grant(req.body);
    await grant.save();
    res.status(201).json(grant);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getGrants = async (req, res) => {
  try {
    const grants = await Grant.find();
    res.json(grants);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getGrantById = async (req, res) => {
  try {
    const grant = await Grant.findById(req.params.id);
    if (!grant) {
      return res.status(404).json({ message: 'Grant not found' });
    }
    res.json(grant);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateGrant = async (req, res) => {
  try {
    const grant = await Grant.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!grant) {
      return res.status(404).json({ message: 'Grant not found' });
    }
    res.json(grant);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteGrant = async (req, res) => {
  try {
    const grant = await Grant.findByIdAndDelete(req.params.id);
    if (!grant) {
      return res.status(404).json({ message: 'Grant not found' });
    }
    res.json({ message: 'Grant deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
