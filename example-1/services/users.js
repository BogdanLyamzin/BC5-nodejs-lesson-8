const User = require("../models");
// {email}
const getOne = (filter) => {
  return User.findOne(filter); // User.findOne({email: filter})
};

const add = (body) => {
  const newUser = new User(body);
  return newUser.save();
};

module.exports = {
  getOne,
  add,
};
