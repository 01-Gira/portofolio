const { WorkExperience, WorkExperienceProjects, Skill } = require('../../models');

// Get user by ID
exports.getWorkExperiencesByUserId = async (req, res) => {
  try {
    const workExperiences = await WorkExperience.findOne({
      where: { userId: req.params.userId }, // Filter berdasarkan kolom userId
      attributes: ['position', 'company', 'description', 'start_date', 'end_date'], // Pilih atribut yang diinginkan
      include: [
        {
          model: WorkExperienceProjects,
          include: [Skill]
        }
      ]
    });
    
    if (!workExperiences) {
      return res.status(404).json({ error: 'Work experiences is empty' });
    }
    res.json(work);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch work experiences' });
  }
};

// Create a new description
exports.createWorkExperience = async (req, res) => {
  try {
    const workExperience = await WorkExperience.create(req.body);
    res.status(201).json(workExperience);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create work experience' });
  }
};

// Update description by ID
exports.updateWorkExperience = async (req, res) => {
  try {
    const [updated] = await WorkExperience.update(req.body, {
      where: { id: req.params.id }
    });
    if (!updated) {
      return res.status(404).json({ error: 'Work experience not found' });
    }
    res.status(200).json({ message: 'Work experience updated' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update work experience' });
  }
};

// Delete description by ID
exports.deleteWorkExperience = async (req, res) => {
  try {
    const deleted = await WorkExperience.destroy({
      where: { id: req.params.id }
    });
    if (!deleted) {
      return res.status(404).json({ error: 'Work experience not found' });
    }
    res.status(200).json({ message: 'Work experience deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete work experience' });
  }
};
