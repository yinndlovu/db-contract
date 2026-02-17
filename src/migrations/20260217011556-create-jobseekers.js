"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("JobSeekers", {
      userId: {
        type: Sequelize.UUID,
        primaryKey: true,
        references: {
          model: "Users",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      credits: {
        type: Sequelize.INTEGER,
        defaultValue: 6,
      },
      balance: {
        type: Sequelize.DECIMAL(10, 2),
        defaultValue: 0,
      },
      subscriptionTier: {
        type: Sequelize.ENUM("Free", "Supporter"),
        allowNull: false,
        defaultValue: "Free",
      },
      subscriptionValidUntil: {
        type: Sequelize.DATE,
      },
      subscriptionValid: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      averageRating: {
        type: Sequelize.DECIMAL(3, 2),
        defaultValue: 0,
      },
      address: {
        type: Sequelize.STRING,
      },
      latitude: {
        type: Sequelize.DECIMAL(10, 8),
      },
      longitude: {
        type: Sequelize.DECIMAL(11, 8),
      },
      refCode: {
        type: Sequelize.STRING,
      },
      totalReferrals: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      optInForSideGigs: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      verified: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      referredBy: {
        type: Sequelize.INTEGER,
      },
      resumeTemplate: {
        type: Sequelize.ENUM("Minimal", "Professional", "Corporate"),
        allowNull: false,
        defaultValue: "Minimal",
      },
      coverLetterTemplate: {
        type: Sequelize.ENUM("Basic", "Professional"),
        allowNull: false,
        defaultValue: "Basic",
      },
      resumeTemplateJson: {
        type: Sequelize.TEXT,
      },
      scrappedJobs: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      foundJobsToday: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
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
    await queryInterface.dropTable("JobSeekers");
  },
};
