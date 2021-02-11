const { pool } = require("../../database");

const Music = require("../models/music");
const AlbumContainMusic = require("../models/albumContainMusic");
const Record = require("../models/record");
const Like = require("../models/like");

const createMusic = async ({ id, albumId, email, name, duration }) => {
  const musics = await pool.query(Music.createMusic, [id, name, duration]);

  await pool.query(AlbumContainMusic.createAlbumContainMusic, [id, albumId]);
  await pool.query(Record.createRecord, [email, id]);

  return musics;
};

const getMusicById = async (id) => {
  const musics = await pool.query(Music.getMusicById, [id]);

  if (musics.rowCount === 0) {
    return null;
  }

  return musics.rows[0];
};

const getMusics = async () => {
  const musics = await pool.query(Music.getMusics);

  return musics.rows;
};

const likeMusic = async ({ musicId, email }) => {
  const musics = await pool.query(Like.createLike, [musicId, email]);

  return musics.rows;
};

module.exports = {
  createMusic,
  getMusicById,
  getMusics,
  likeMusic,
};
