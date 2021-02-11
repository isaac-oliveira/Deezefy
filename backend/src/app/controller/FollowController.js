const bcrypt = require("bcryptjs");
const { followArtist } = require("../logic/artist");
const { getFollowArtists } = require("../logic/listener");

module.exports = {
  store: async (req, res) => {
    const { artist_email, listener_email } = req.body;
    try {
      await followArtist({ artist_email, listener_email });

      return res.status(200).json({ message: "Seguindo com sucesso!" });
    } catch (e) {
      console.log(e);
      return res.status(500).json({ error: "Erro interno no servidor!" });
    }
  },
  list: async (req, res) => {
    const { email } = req.params;

    try {
      const artists = await getFollowArtists(email);

      return res.status(200).json(artists);
    } catch (e) {
      console.log(e);
      return res.status(500).json({ error: "Erro interno no servidor!" });
    }
  },
};
