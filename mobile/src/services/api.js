import { create } from "apisauce";

const api = create({
  baseURL: "https://db-ufs-isaac.herokuapp.com",
  timeout: 6000,
});

const login = async ({ email, password }) =>
  await api.post("/login", {
    email,
    password,
  });

const getMusics = async (token) =>
  await api.get("/musics", {}, {
    headers: {
      authorization: `Bearer ${token}`
    }
  });

export default {
  login,
  getMusics
};
