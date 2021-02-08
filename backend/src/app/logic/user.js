const jwt = require("jsonwebtoken");
const moment = require("moment");

const { pool } = require("../../database");
const User = require("../models/user");

const createUser = async ({ email, password }) => {
  const date = moment().format("DD/MM/YYYY");

  const users = await pool.query(User.createUser, [email, password, date]);

  return users;
};

const getUserByEmail = async (email) => {
  const users = await pool.query(User.getUserByEmail, [email]);

  if (users.rowCount === 0) {
    return null;
  }

  return users.rows[0];
};

const getUsers = async () => {};

const getUserToken = (email) => {
  const token = jwt.sign({ email }, process.env.SECRET, {
    expiresIn: 86400,
  });

  return token;
};

const getUserType = ({ isListener, isArtist }) => {
  if (isArtist && isListener) {
    return "BOTH";
  }

  if (isArtist) {
    return "ARTIST";
  }

  if (isListener) {
    return "LISTENER";
  }

  return "NONE";
};

module.exports = {
  createUser,
  getUserByEmail,
  getUsers,
  getUserToken,
  getUserType,
};
