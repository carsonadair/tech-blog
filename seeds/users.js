const { User } = require("../models");

const userData = [
  {
    name: "naruto uzumaki",
    password: "password",
  },
  {
    name: "sasuke uchiha",
    password: "password2",
  },
];

const seedUserData = () => User.bulkCreate(userData);

module.exports = seedUserData;
