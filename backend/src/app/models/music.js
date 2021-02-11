const createMusic = "INSERT INTO deezefy.musica VALUES ($1, $2, $3)";

const getMusicById = "SELECT * FROM deezefy.musica WHERE id=$1";

const getMusics = "SELECT * FROM deezefy.musica";

module.exports = {
  createMusic,
  getMusicById,
  getMusics,
};
