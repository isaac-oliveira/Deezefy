const bcrypt = require("bcryptjs");
const { createArtist, getArtistByEmail } = require("../logic/artist");
const { getListenerByEmail, createListener } = require("../logic/listener");
const { createUser, getUserByEmail } = require("../logic/user");

module.exports = {
  store: async (req, res) => {
    const { email, password, isArtist } = req.body;

    try {
      const user = await getUserByEmail(email);
      if (!user) {
        const hash = await bcrypt.hash(password, 10);
        await createUser({ email, password: hash });
      } else {
        const checkPassword = await bcrypt.compare(password, user.senha);
        if (!checkPassword) {
          return res.status(400).json({
            error:
              "Caso queira se cadastrar como outro tipo de usuário, por favor insira a mesma senha que você usou ao se cadastrar pela primeira vez!",
          });
        }
      }

      const artist = await getArtistByEmail(email);
      const listener = await getListenerByEmail(email);

      if (isArtist) {
        if (artist) {
          return res
            .status(400)
            .json({ error: "Esse usuário já é um artista!" });
        }

        const { artisticName, yearFormation, biografy } = req.body;
        await createArtist({
          email,
          artisticName,
          yearFormation,
          biografy,
        });
        return res.status(200).json({ message: "Artista criado com sucesso!" });
      } else {
        if (listener) {
          return res
            .status(400)
            .json({ error: "Esse usuário já é um ouvinte!" });
        }
        const { firstname, lastname, phone } = req.body;
        await createListener({
          email,
          firstname,
          lastname,
          phone,
        });

        return res.status(200).json({ message: "Ouvinte criado com sucesso!" });
      }
    } catch (e) {
      console.log(e);
      return res.status(500).json({ error: "Erro interno no servidor!" });
    }
  },
};
