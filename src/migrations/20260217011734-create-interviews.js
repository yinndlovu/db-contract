"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Interviews", {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
      },
      applicationId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "Applications",
          key: "id",
        },
        onDelete: "RESTRICT",
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
      status: {
        type: Sequelize.ENUM("Scheduled", "Completed", "Cancelled"),
        allowNull: false,
        defaultValue: "Scheduled",
      },
      scheduledDate: {
        type: Sequelize.DATE,
      },
      meetingLink: {
        type: Sequelize.STRING,
      },
      feedback: {
        type: Sequelize.TEXT,
      },
      isApproved: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
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

    // Indexes
    await queryInterface.addIndex("Interviews", ["applicationId"]);
    await queryInterface.addIndex("Interviews", ["recruiterId"]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Interviews");
  },
};
