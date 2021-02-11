import { create } from "apisauce";

export const api = create({
  baseURL: "https://db-ufs-isaac.herokuapp.com",
  timeout: 6000,
});

const login = async ({ email, password }) =>
  await api.post("/login", {
    email,
    password,
  });

const createMusic = async (music) => await api.post("/music", music);

const getMusics = async () => await api.get("/musics");

const getArtists = async () => await api.get("/artists");

const getLikeMusics = async (email) => await api.get(`/like/${email}/musics`);

const createLike = async (like) => await api.post("/like", like);

const getFollowArtists = async (email) =>
  await api.get(`/followers/${email}/artists`);

const createFollow = async (follow) => await api.post("/followers", follow);

const getPlaylists = async () => await api.get("/playlists");

const createPlaylist = async (playlist) =>
  await api.post("/playlist", playlist);

export default {
  login,
  createMusic,
  getMusics,
  getArtists,
  getLikeMusics,
  createLike,
  getFollowArtists,
  createFollow,
  getPlaylists,
  createPlaylist,
};
