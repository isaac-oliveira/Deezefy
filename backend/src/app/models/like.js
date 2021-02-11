const createLike = "INSERT INTO deezefy.curte VALUES ($1, $2)";

const getLikeMusics =
  "SELECT * FROM deezefy.curte cur INNER JOIN deezefy.musica mus ON (cur.id = mus.id) WHERE cur.email=$1";

module.exports = {
  createLike,
  getLikeMusics,
};
