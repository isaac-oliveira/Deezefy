const createAlbumContainMusic =
  "INSERT INTO deezefy.albumContemMusica VALUES ($1, $2)";

const getAlbumMusics =
  "SELECT * FROM deezefy.albumContemMusica alb INNER JOIN deezefy.musica mus ON (alb.musica_id = mus.id) WHERE alb.album_id=$1";

module.exports = {
  createAlbumContainMusic,
  getAlbumMusics,
};
