const bcrypt = require("bcryptjs");
const {
  createPlaylist,
  getPlaylists,
  getPlaylistByName,
} = require("../logic/playlist");
const { getUserByEmail } = require("../logic/user");

module.exports = {
  store: async (req, res) => {
    const { name, status, email } = req.body;
    try {
      const user = await getUserByEmail(email);
      if (!user) {
        return res.status(404).json({ error: "Usuário não encontrado!" });
      }
      const playlists = await createPlaylist({ name, status, email });

      return res.status(200).json({ message: "Playlist criada com sucesso!" });
    } catch (e) {
      console.log(e);
      return res.status(500).json({ error: "Erro interno no servidor!" });
    }
  },
  list: async (req, res) => {
    try {
      const playlists = await getPlaylists();

      return res.status(200).json(playlists);
    } catch (e) {
      return res.status(500).json({ error: "Erro interno no servidor!" });
    }
  },
  show: async (req, res) => {
    const { name } = req.params;
    try {
      const playlist = await getPlaylistByName(name);

      return res.status(200).json(playlist);
    } catch (e) {
      return res.status(500).json({ error: "Erro interno no servidor!" });
    }
  },
};
