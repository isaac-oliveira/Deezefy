const createListener = "INSERT INTO deezefy.ouvinte VALUES ($1, $2, $3, $4)";

const getListenerByEmail = "SELECT * FROM deezefy.ouvinte WHERE email=$1";

const getListeners = "SELECT * FROM deezefy.ouvinte";

module.exports = {
  createListener,
  getListenerByEmail,
  getListeners,
};
