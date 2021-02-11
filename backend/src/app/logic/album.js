const { pool } = require("../../database");
const Album = require("../models/album");
const AlbumContainMusic = require("../models/albumContainMusic");

const createAlbum = async ({ id, title, releaseYear, email }) => {
  const albuns = await pool.query(Album.createAlbum, [
    id,
    releaseYear,
    title,
    email,
  ]);

  return albuns;
};

const getAlbumById = async (id) => {
  const albuns = await pool.query(Album.getAlbumById, [id]);

  if (albuns.rowCount === 0) {
    return null;
  }

  return albuns.rows[0];
};

const getAlbuns = async () => {
  const albuns = await pool.query(Album.getAlbuns);

  return albuns.rows;
};

const getAlbumMusics = async (albumId) => {
  const musics = await pool.query(AlbumContainMusic.getAlbumMusics, [albumId]);

  return musics.rows;
};

module.exports = {
  createAlbum,
  getAlbumById,
  getAlbuns,
  getAlbumMusics,
};
