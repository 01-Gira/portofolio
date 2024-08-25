const { DataTypes } = require("sequelize");
const sequelize = require("../../config/database");
const { v4: uuidv4 } = require('uuid'); // Menggunakan uuid untuk generate UUID
const PersonalProject = require('./PersonalProject');
const Skill = require('./Skill');

const PersonalProjectSkill = sequelize.define('personal_project_skills', {
    personalProjectId: {
      type: DataTypes.UUID,
      references: {
        model: PersonalProject,
        key: 'id'
      }
    },
    skillId: {
      type: DataTypes.UUID,
      references: {
        model: Skill,
        key: 'id'
      }
    }
});

module.exports = PersonalProjectSkill;