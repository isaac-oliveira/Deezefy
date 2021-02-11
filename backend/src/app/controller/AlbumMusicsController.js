const bcrypt = require("bcryptjs");
const { getAlbumMusics } = require("../logic/album");

module.exports = {
  list: async (req, res) => {
    const { albumId } = req.params;

    try {
      const musics = await getAlbumMusics(albumId);

      return res.status(200).json(musics);
    } catch (e) {
      console.log(e);
      return res.status(500).json({ error: "Erro interno no servidor!" });
    }
  },
};
