const bcrypt = require("bcryptjs");

const { getArtistByEmail } = require("../logic/artist");
const { getListenerByEmail } = require("../logic/listener");
const { getUserByEmail, getUserToken, getUserType } = require("../logic/user");

module.exports = {
  store: async (req, res) => {
    const { email, password } = req.body;

    try {
      const user = await getUserByEmail(email);
      if (!user) {
        return res.status(404).json({ error: "Usuário não encontrado!" });
      }

      const checkPassword = await bcrypt.compare(password, user.senha);
      if (!checkPassword) {
        return res.status(400).json({ error: "Senha inválida!" });
      }

      const artist = await getArtistByEmail(email);
      const listener = await getListenerByEmail(email);

      if (!listener && !artist) {
        return res.status(400).json({
          error: "O usuário precisa ser um Artista ou Ouvinte para se logar",
        });
      }
      const userType = getUserType({ isListener: listener, isArtist: artist });
      const token = getUserToken(email);

      return res.status(200).json({ token, userType });
    } catch (e) {
      return res.status(500).json({ error: "Erro interno no servidor!" });
    }
  },
};
