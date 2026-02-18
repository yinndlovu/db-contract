"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("PostedJobs", {
      jobId: {
        type: Sequelize.UUID,
        primaryKey: true,
        references: {
          model: "Jobs",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      recruiterId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "Recruiters",
          key: "userId",
        },
        onDelete: "RESTRICT",
        onUpdate: "CASCADE",
      },
      companyId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "Companies",
          key: "id",
        },
        onDelete: "RESTRICT",
        onUpdate: "CASCADE",
      },
      employmentType: {
        type: Sequelize.ENUM(
          "Full_Time",
          "Part_Time",
          "Contract",
          "Internship",
          "Learnership",
          "Volunteering",
          "Freelancing",
        ),
      },
      experienceLevel: {
        type: Sequelize.ENUM("Entry-level", "Mid-level", "Experienced"),
      },
      salaryMin: {
        type: Sequelize.INTEGER,
      },
      salaryMax: {
        type: Sequelize.INTEGER,
      },
      currency: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      role: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      aboutRole: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      responsibilities: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      requirements: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      benefits: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      requiredSkills: {
        type: Sequelize.JSON,
        allowNull: false,
        defaultValue: [],
      },
      niceToHaveSkills: {
        type: Sequelize.JSON,
        allowNull: true,
        defaultValue: [],
      },
      minYearsExperience: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      educationLevel: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      isActive: {
        type: Sequelize.BOOLEAN,
      },
      expiresAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      viewsCount: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      applicationsCount: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal(
          "CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP",
        ),
      },
    });

    //Indexes
    await queryInterface.addIndex("PostedJobs", ["companyId"]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("PostedJobs");
  },
};
