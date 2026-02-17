"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Escrows", {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
      },
      sideGigPaymentId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "SideGigPayments",
          key: "id",
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
      amount: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      platformFee: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      netAmount: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      currency: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      isDisputed: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      applicantReleaseRequest: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      posterReleaseApproval: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      automaticApprovalTimeout: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      status: {
        type: Sequelize.ENUM("Held", "Released", "Disputed", "Refunded"),
        allowNull: false,
        defaultValue: "Held",
      },
      statusReason: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue:
          "Funds are held in escrow until the job is completed or a dispute is resolved.",
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
    await queryInterface.addIndex("Escrows", ["posterId"]);
    await queryInterface.addIndex("Escrows", ["applicantId"]);
    await queryInterface.addIndex("Escrows", ["status"]);
    await queryInterface.addIndex("Escrows", ["posterId", "status"]);
    await queryInterface.addIndex("Escrows", ["applicantId", "status"]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Escrows");
  },
};
