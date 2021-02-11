const createGenre = "INSERT INTO deezefy.genero VALUES ($1, $2)";

const getGenreByName = "SELECT * FROM deezefy.genero WHERE nome=$1";

const getGenres = "SELECT * FROM deezefy.genero";

module.exports = {
  createGenre,
  getGenreByName,
  getGenres,
};
