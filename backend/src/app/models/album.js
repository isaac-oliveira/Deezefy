const createAlbum = "INSERT INTO deezefy.album VALUES ($1, $2, $3, $4)";

const getAlbumById = "SELECT * FROM deezefy.album WHERE id=$1";

const getAlbuns = "SELECT * FROM deezefy.album";

module.exports = {
  createAlbum,
  getAlbumById,
  getAlbuns,
};
