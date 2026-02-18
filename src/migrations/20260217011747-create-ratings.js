"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Ratings", {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
      },
      reviewerId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "Users",
          key: "id",
        },
        onDelete: "RESTRICT",
        onUpdate: "CASCADE",
      },
      ratedUserId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "Users",
          key: "id",
        },
        onDelete: "RESTRICT",
        onUpdate: "CASCADE",
      },
      jobId: {
        type: Sequelize.UUID,
        allowNull: true,
        references: {
          model: "Jobs",
          key: "id",
        },
        onDelete: "RESTRICT",
        onUpdate: "CASCADE",
      },
      sideGigId: {
        type: Sequelize.UUID,
        allowNull: true,
        references: {
          model: "SideGigs",
          key: "jobId",
        },
        onDelete: "RESTRICT",
        onUpdate: "CASCADE",
      },
      score: {
        type: Sequelize.INTEGER,
        validate: { min: 1, max: 5 },
      },
      message: {
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

    await queryInterface.addIndex("Ratings", ["reviewerId"]);
    await queryInterface.addIndex("Ratings", ["ratedUserId"]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Ratings");
  },
};
