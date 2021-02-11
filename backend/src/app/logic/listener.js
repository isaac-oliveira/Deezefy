const { pool } = require("../../database");
const Listener = require("../models/listener");
const Follow = require("../models/follow");
const Like = require("../models/like");

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

const getFollowArtists = async (email) => {
  const artists = await pool.query(Follow.getFollowArtists, [email]);

  return artists.rows;
};

const getLikeMusics = async (email) => {
  const musics = await pool.query(Like.getLikeMusics, [email]);

  return musics.rows;
};

module.exports = {
  createListener,
  getListenerByEmail,
  getFollowArtists,
  getLikeMusics,
};
