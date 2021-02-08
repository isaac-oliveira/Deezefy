const createArtist = "INSERT INTO deezefy.artista VALUES ($1, $2, $3, $4)";

const getArtistByEmail = "SELECT * FROM deezefy.artista WHERE email=$1";

const getArtists = "SELECT * FROM deezefy.artista";

module.exports = {
  createArtist,
  getArtistByEmail,
  getArtists,
};
