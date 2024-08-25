const User = require('./User');
const Description = require('./Description');
const WorkExperience = require('./WorkExperience');
const PersonalProject = require('./PersonalProject');
const Skill = require('./Skill');
const WorkExperienceProject = require('./WorkExperienceProject');
const sequelize = require('../../config/database');

// Relasi
User.hasOne(Description);
Description.belongsTo(User);

User.hasMany(WorkExperience);
WorkExperience.belongsTo(User);

User.hasMany(PersonalProject);
PersonalProject.belongsTo(User);

User.hasMany(Skill);
Skill.belongsTo(User);

PersonalProject.belongsToMany(Skill, { through: 'personal_project_skills' });
Skill.belongsToMany(PersonalProject, { through: 'personal_project_skills' });

WorkExperience.hasMany(WorkExperienceProject);
WorkExperienceProject.belongsTo(WorkExperience);

WorkExperienceProject.belongsToMany(Skill, { through: 'work_experience_project_skills' });
Skill.belongsToMany(WorkExperienceProject, { through: 'work_experience_project_skills' });

// Sinkronisasi Model dengan Database
// sequelize.sync({ force: true }) // Menghapus tabel yang ada dan membuat tabel baru
//   .then(() => {
//     console.log('Database & tables created!');
//   })
//   .catch((error) => {
//     console.error('Unable to create tables:', error);
//   });

module.exports = { User, Description, WorkExperience, PersonalProject, Skill, WorkExperienceProject };
