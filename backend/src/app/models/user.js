const createUser = "INSERT INTO deezefy.usuario VALUES ($1, $2, $3)";

const getUserByEmail = "SELECT * FROM deezefy.usuario WHERE email=$1";

const getUsers = "SELECT * FROM deezefy.usuario";

module.exports = {
  createUser,
  getUserByEmail,
  getUsers,
};
