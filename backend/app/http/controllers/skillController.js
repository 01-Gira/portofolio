const { Skill } = require('../../models');

// Get user by ID
exports.getSkillsByUserId = async (req, res) => {
  try {
    const skills = await Skill.findOne({
      where: { userId: req.params.userId }, // Filter berdasarkan kolom userId
      attributes: ['name'] // Pilih atribut yang diinginkan
    });
    
    if (!skills) {
      return res.status(404).json({ error: 'Skills is empty' });
    }
    res.json(skills);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch skills' });
  }
};

// Create a new description
exports.createSkill = async (req, res) => {
  try {
    const skill = await Skill.create(req.body);
    res.status(201).json(skill);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create skill' });
  }
};

// Update description by ID
exports.updateSkill = async (req, res) => {
  try {
    const [updated] = await Skill.update(req.body, {
      where: { id: req.params.id }
    });
    if (!updated) {
      return res.status(404).json({ error: 'Skill not found' });
    }
    res.status(200).json({ message: 'Skill updated' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update skill' });
  }
};

// Delete description by ID
exports.deleteSkill = async (req, res) => {
  try {
    const deleted = await Skill.destroy({
      where: { id: req.params.id }
    });
    if (!deleted) {
      return res.status(404).json({ error: 'Skill not found' });
    }
    res.status(200).json({ message: 'Skill deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete skill' });
  }
};
