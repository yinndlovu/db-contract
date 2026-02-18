"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Disputes", {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
      },
      escrowId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "Escrows",
          key: "id",
        },
        onDelete: "RESTRICT",
        onUpdate: "CASCADE",
      },
      initiatedBy: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "JobSeekers",
          key: "userId",
        },
        onDelete: "RESTRICT",
        onUpdate: "CASCADE",
      },
      posterId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "JobSeekers",
          key: "userId",
        },
        onDelete: "RESTRICT",
        onUpdate: "CASCADE",
      },
      applicantId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "JobSeekers",
          key: "userId",
        },
        onDelete: "RESTRICT",
        onUpdate: "CASCADE",
      },
      reason: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      resolution: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      resolutionReason: {
        type: Sequelize.STRING,
      },
      posterEvidence: {
        type: Sequelize.TEXT,
      },
      applicantEvidence: {
        type: Sequelize.TEXT,
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
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Disputes");
  },
};
