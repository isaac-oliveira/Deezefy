const { pool } = require("../../database");
const Artist = require("../models/artist");
const Record = require("../models/record");
const Follow = require("../models/follow");

const createArtist = async ({
  email,
  artisticName,
  yearFormation,
  biografy,
}) => {
  const artists = await pool.query(Artist.createArtist, [
    artisticName,
    biografy,
    yearFormation,
    email,
  ]);

  return artists;
};

const getArtistByEmail = async (email) => {
  const artists = await pool.query(Artist.getArtistByEmail, [email]);

  if (artists.rowCount === 0) {
    return null;
  }

  return artists.rows[0];
};

const getArtists = async () => {
  const artists = await pool.query(Artist.getArtists);

  return artists.rows;
};

const getArtistMusics = async (email) => {
  const musics = await pool.query(Record.getArtistMusics, [email]);

  return musics.rows;
};

const followArtist = async ({ artist_email, listener_email }) => {
  const result = await pool.query(Follow.createFollow, [
    artist_email,
    listener_email,
  ]);

  return result;
};

module.exports = {
  createArtist,
  getArtistByEmail,
  getArtists,
  getArtistMusics,
  followArtist,
};
