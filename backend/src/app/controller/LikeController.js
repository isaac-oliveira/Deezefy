const bcrypt = require("bcryptjs");
const { getLikeMusics } = require("../logic/listener");

const { likeMusic } = require("../logic/music");

module.exports = {
  store: async (req, res) => {
    const { musicId, email } = req.body;
    try {
      await likeMusic({ musicId, email });

      return res.status(200).json({ message: "Seguindo com sucesso!" });
    } catch (e) {
      console.log(e);
      return res.status(500).json({ error: "Erro interno no servidor!" });
    }
  },
  list: async (req, res) => {
    const { email } = req.params;

    try {
      const musics = await getLikeMusics(email);

      return res.status(200).json(musics);
    } catch (e) {
      console.log(e);
      return res.status(500).json({ error: "Erro interno no servidor!" });
    }
  },
};
