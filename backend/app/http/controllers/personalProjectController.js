const { PersonalProject, PersonalProjectSkill } = require('../../models');

// Get user by ID
exports.getPersonalProjectsByUserId = async (req, res) => {
  try {
    const personalProjects = await PersonalProject.findOne({
      where: { userId: req.params.userId }, // Filter berdasarkan kolom userId
      attributes: ['name', 'description'], // Pilih atribut yang diinginkan
      include: [
        {
          model: Skill
        }
      ]
    });
    
    if (!personalProjects) {
      return res.status(404).json({ error: 'Personal projects is empty' });
    }
    res.json(work);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch Personal projects' });
  }
};

// Create a new personal project
exports.createPersonalProject = async (req, res) => {
  try {
    const { name, description, skills } = req.body;

    const personalProject = await PersonalProject.create({ name, description });
    skills.map(skillId => console.log(skillId.skillId));
    // console.log(skills);
    if (skills && skills.length > 0) {
      // `skills` adalah array yang berisi ID skill
      const skillsToAdd = skills.map(value => ({
        personalProjectId: personalProject.id,
        skillId: value.skillId
      }));

      await PersonalProjectSkill.bulkCreate(skillsToAdd);
    }

    res.status(201).json(personalProject);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create personal project' });
  }
};

// Update personal project by ID
exports.updatePersonalProject = async (req, res) => {
  try {
    const [updated] = await PersonalProject.update(req.body, {
      where: { id: req.params.id }
    });
    if (!updated) {
      return res.status(404).json({ error: 'Personal project not found' });
    }
    res.status(200).json({ message: 'Personal project updated' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update personal project' });
  }
};

// Delete personal project by ID
exports.deletePersonalProject = async (req, res) => {
  try {
    const deleted = await PersonalProject.destroy({
      where: { id: req.params.id }
    });
    if (!deleted) {
      return res.status(404).json({ error: 'Personal project not found' });
    }
    res.status(200).json({ message: 'Personal project deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete personal project' });
  }
};
