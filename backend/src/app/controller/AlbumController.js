const bcrypt = require("bcryptjs");
const { createAlbum, getAlbuns, getAlbumById } = require("../logic/album");
const { getArtistByEmail } = require("../logic/artist");

module.exports = {
  store: async (req, res) => {
    const { id, title, releaseYear, email } = req.body;
    try {
      const artist = await getArtistByEmail(email);
      if (!artist) {
        return res.status(404).json({ error: "Artista não encontrado!" });
      }
      const albuns = await createAlbum({ id, title, releaseYear, email });

      return res.status(200).json({ message: "Álbum criada com sucesso!" });
    } catch (e) {
      return res.status(500).json({ error: "Erro interno no servidor!" });
    }
  },
  list: async (req, res) => {
    try {
      const albuns = await getAlbuns();

      return res.status(200).json(albuns);
    } catch (e) {
      return res.status(500).json({ error: "Erro interno no servidor!" });
    }
  },
  show: async (req, res) => {
    const { id } = req.params;
    try {
      const album = await getAlbumById(id);

      return res.status(200).json(album);
    } catch (e) {
      return res.status(500).json({ error: "Erro interno no servidor!" });
    }
  },
};
