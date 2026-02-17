"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Applications", {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
      },
      jobId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "Jobs",
          key: "id",
        },
        onDelete: "RESTRICT",
        onUpdate: "CASCADE",
      },
      jobSeekerId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "JobSeekers",
          key: "userId",
        },
        onDelete: "RESTRICT",
        onUpdate: "CASCADE",
      },
      status: {
        type: Sequelize.ENUM(
          "Pending",
          "Shortlisted",
          "Rejected",
          "Hired",
          "Withdrawn",
        ),
        allowNull: false,
        defaultValue: "Pending",
      },
      appliedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
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
    await queryInterface.addIndex("Applications", ["jobId"]);
    await queryInterface.addIndex("Applications", ["jobSeekerId"]);
    await queryInterface.addIndex("Applications", ["jobId", "status"]);

    // Unique constraint prevent duplicate applications
    await queryInterface.addIndex("Applications", ["jobId", "jobSeekerId"], {
      unique: true,
      name: "uniq_job_application",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Applications");
  },
};
