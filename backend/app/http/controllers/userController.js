const { User, Description, WorkExperience, PersonalProjects, Skill, WorkExperienceProjects } = require('../../models');

// Get user by ID
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id, {
      attributes: ['name', 'email'],
      include: [
        {
          model: Description,
          attributes: ['text']
        },
        {
          model: WorkExperience,
          include: [
            {
              model: WorkExperienceProjects,
              include: [Skill]
            }
          ]
        },
        {
          model: PersonalProjects,
          include: [Skill]
        },
        Skill
      ]
    });
    
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch user' });
  }
};

// Create a new user
exports.createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create user' });
  }
};

// Update user by ID
exports.updateUser = async (req, res) => {
  try {
    const [updated] = await User.update(req.body, {
      where: { id: req.params.id }
    });
    if (!updated) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json({ message: 'User updated' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update user' });
  }
};

// Delete user by ID
exports.deleteUser = async (req, res) => {
  try {
    const deleted = await User.destroy({
      where: { id: req.params.id }
    });
    if (!deleted) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json({ message: 'User deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete user' });
  }
};
