const { pool } = require("../../database");
const Artist = require("../models/artist");

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

const getArtists = async () => {};

module.exports = {
  createArtist,
  getArtistByEmail,
  getArtists,
};
