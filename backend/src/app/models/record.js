const createRecord = "INSERT INTO deezefy.grava VALUES ($1, $2)";

const getArtistMusics =
  "SELECT * FROM deezefy.grava gra INNER JOIN deezefy.musica mus ON (gra.id = mus.id) WHERE gra.email=$1";

module.exports = {
  createRecord,
  getArtistMusics,
};
