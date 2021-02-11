const createFollow = "INSERT INTO deezefy.segue VALUES ($1, $2)";

const getFollowArtists =
  "SELECT * FROM deezefy.segue seg INNER JOIN deezefy.artista art ON (seg.artista_email = art.email) WHERE seg.ouvinte_email=$1";

module.exports = {
  createFollow,
  getFollowArtists,
};
