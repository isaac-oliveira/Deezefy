const bcrypt = require("bcryptjs");
const { getArtistMusics } = require("../logic/artist");

module.exports = {
  list: async (req, res) => {
    const { email } = req.params;

    try {
      const musics = await getArtistMusics(email);

      return res.status(200).json(musics);
    } catch (e) {
      console.log(e);
      return res.status(500).json({ error: "Erro interno no servidor!" });
    }
  },
};
