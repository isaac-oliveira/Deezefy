const bcrypt = require("bcryptjs");
const { createGenre, getGenres, getGenreByName } = require("../logic/genre");

module.exports = {
  store: async (req, res) => {
    const { name, style } = req.body;
    try {
      const genres = await createGenre({ name, style });

      return res.status(200).json({ message: "Gênero criada com sucesso!" });
    } catch (e) {
      return res.status(500).json({ error: "Erro interno no servidor!" });
    }
  },
  list: async (req, res) => {
    try {
      const genres = await getGenres();

      return res.status(200).json(genres);
    } catch (e) {
      return res.status(500).json({ error: "Erro interno no servidor!" });
    }
  },
  show: async (req, res) => {
    const { name } = req.params;
    try {
      const genre = await getGenreByName(name);

      return res.status(200).json(genre);
    } catch (e) {
      return res.status(500).json({ error: "Erro interno no servidor!" });
    }
  },
};
