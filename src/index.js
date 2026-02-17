const sequelize = require("./sequelize");
const models = require("./models");

module.exports = {
  sequelize,
  ...models,
};
