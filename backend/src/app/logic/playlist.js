const { pool } = require("../../database");
const moment = require("moment");
const Playlist = require("../models/playlist");

const createPlaylist = async ({ name, status, email }) => {
  const date = moment().format("DD/MM/YYYY");
  const tableCreate = await pool.query(Playlist.createTableCreate, [
    date,
    email,
  ]);

  const playlists = await pool.query(Playlist.createPlaylist, [
    name,
    status,
    email,
  ]);

  return playlists;
};

const getPlaylistByName = async (name) => {
  const playlists = await pool.query(Playlist.getPlaylistByName, [name]);

  if (playlists.rowCount === 0) {
    return null;
  }

  return playlists.rows[0];
};

const getPlaylists = async () => {
  const playlists = await pool.query(Playlist.getPlaylists);

  return playlists.rows;
};

module.exports = {
  createPlaylist,
  getPlaylistByName,
  getPlaylists,
};
