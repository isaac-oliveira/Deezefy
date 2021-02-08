const { pool } = require("../../database");
const Listener = require("../models/listener");

const createListener = async ({ email, phone, firstname, lastname }) => {
  const listeners = await pool.query(Listener.createListener, [
    phone,
    firstname,
    lastname,
    email,
  ]);

  return listeners;
};

const getListenerByEmail = async (email) => {
  const listeners = await pool.query(Listener.getListenerByEmail, [email]);

  if (listeners.rowCount === 0) {
    return null;
  }

  return listeners.rows[0];
};

const getListeners = async () => {};

module.exports = {
  createListener,
  getListenerByEmail,
  getListeners,
};
