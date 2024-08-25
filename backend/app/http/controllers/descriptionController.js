const { Description } = require('../../models');

// Get user by ID
exports.getDescriptionByUserId = async (req, res) => {
  try {
    const description = await Description.findOne({
      where: { userId: req.params.userId }, // Filter berdasarkan kolom userId
      attributes: ['text'] // Pilih atribut yang diinginkan
    });
    
    if (!description) {
      return res.status(404).json({ error: 'Description not found' });
    }
    res.json(description);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch description' });
  }
};

// Create a new description
exports.createDescription = async (req, res) => {
  try {
    const description = await Description.create(req.body);
    res.status(201).json(description);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create description' });
  }
};

// Update description by ID
exports.updateDescription = async (req, res) => {
  try {
    const [updated] = await Description.update(req.body, {
      where: { id: req.params.id }
    });
    if (!updated) {
      return res.status(404).json({ error: 'Description not found' });
    }
    res.status(200).json({ message: 'Description updated' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update description' });
  }
};

// Delete description by ID
exports.deleteDescription = async (req, res) => {
  try {
    const deleted = await Description.destroy({
      where: { id: req.params.id }
    });
    if (!deleted) {
      return res.status(404).json({ error: 'Description not found' });
    }
    res.status(200).json({ message: 'Description deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete description' });
  }
};
