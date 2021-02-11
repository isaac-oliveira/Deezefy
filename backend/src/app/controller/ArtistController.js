const bcrypt = require("bcryptjs");
const { getArtists } = require("../logic/artist");

module.exports = {
  list: async (req, res) => {
    try {
      const artists = await getArtists();

      return res.status(200).json(artists);
    } catch (e) {
      console.log(e);
      return res.status(500).json({ error: "Erro interno no servidor!" });
    }
  },
};
