const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization)
    return res.status(401).json({ message: "Token não providenciado" });
  try {
    const [bearer, token] = authorization.split(" ");
    if (bearer === "Bearer") {
      jwt.verify(token, process.env.SECRET, (err, decoded) => {
        if (err)
          return res.status(500).json({ message: "Falha ao autenticar" });
        next();
      });
    } else {
      return res.status(401).json({ message: "Token inválido" });
    }
  } catch (err) {
    return res.status(500).json({ message: "Erro interno no servidor" });
  }
};

module.exports = authenticate;
