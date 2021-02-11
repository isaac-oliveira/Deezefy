const { pool } = require("../../database");
const Genre = require("../models/genre");

const createGenre = async ({ name, style }) => {
  const genres = await pool.query(Genre.createGenre, [name, style]);

  return genres;
};

const getGenreByName = async (name) => {
  const genres = await pool.query(Genre.getGenreByName, [name]);

  if (genres.rowCount === 0) {
    return null;
  }

  return genres.rows[0];
};

const getGenres = async () => {
  const genres = await pool.query(Genre.getGenres);

  return genres.rows;
};

module.exports = {
  createGenre,
  getGenreByName,
  getGenres,
};
