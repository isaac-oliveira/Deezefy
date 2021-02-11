const bcrypt = require("bcryptjs");
const { createMusic, getMusics, getMusicById } = require("../logic/music");

module.exports = {
  store: async (req, res) => {
    const { id, albumId, email, name, duration } = req.body;
    try {
      const musics = await createMusic({ id, albumId, email, name, duration });

      return res.status(200).json({ message: "Música criada com sucesso!" });
    } catch (e) {
      return res.status(500).json({ error: "Erro interno no servidor!" });
    }
  },
  list: async (req, res) => {
    try {
      const musics = await getMusics();

      return res.status(200).json(musics);
    } catch (e) {
      return res.status(500).json({ error: "Erro interno no servidor!" });
    }
  },
  show: async (req, res) => {
    const { id } = req.params;
    try {
      const music = await getMusicById(id);

      return res.status(200).json(music);
    } catch (e) {
      return res.status(500).json({ error: "Erro interno no servidor!" });
    }
  },
};
