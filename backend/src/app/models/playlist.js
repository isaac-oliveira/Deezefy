const createPlaylist = "INSERT INTO deezefy.playlist VALUES ($1, $2, $3)";

const createTableCreate = "INSERT INTO deezefy.cria VALUES ($1, $2)";

const getPlaylistByName = "SELECT * FROM deezefy.playlist WHERE nome=$1";

const getPlaylists = "SELECT * FROM deezefy.playlist";

module.exports = {
  createPlaylist,
  createTableCreate,
  getPlaylistByName,
  getPlaylists,
};
