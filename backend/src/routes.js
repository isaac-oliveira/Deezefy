const express = require("express");

const AlbumMusicsController = require("./app/controller/AlbumMusicsController");
const AlbumController = require("./app/controller/AlbumController");
const ArtistMusicsController = require("./app/controller/ArtistMusicsController");
const ArtistController = require("./app/controller/ArtistController");
const GenreController = require("./app/controller/GenreController");
const LoginController = require("./app/controller/LoginController");
const MusicController = require("./app/controller/MusicController");
const PlaylistController = require("./app/controller/PlaylistController");
const UserController = require("./app/controller/UserController");

const authenticate = require("./app/middlewares/autenticate");
const FollowController = require("./app/controller/FollowController");
const LikeController = require("./app/controller/LikeController");

const Router = express.Router();

Router.post("/login", LoginController.store);
Router.post("/register", UserController.store);

Router.post("/music", authenticate, MusicController.store);
Router.get("/music/:id", authenticate, MusicController.show);
Router.get("/musics", authenticate, MusicController.list);

Router.get("/artists", authenticate, ArtistController.list);

Router.get("/artist/:email/musics", authenticate, ArtistMusicsController.list);

Router.post("/album", authenticate, AlbumController.store);
Router.get("/album/:id", authenticate, AlbumController.show);
Router.get("/albuns", authenticate, AlbumController.list);

Router.get("/album/:albumId/musics", authenticate, AlbumMusicsController.list);

Router.post("/genre", authenticate, GenreController.store);
Router.get("/genre/:name", authenticate, GenreController.show);
Router.get("/genres", authenticate, GenreController.list);

Router.post("/playlist", authenticate, PlaylistController.store);
Router.get("/playlist/:name", authenticate, PlaylistController.show);
Router.get("/playlists", authenticate, PlaylistController.list);

Router.post("/followers", authenticate, FollowController.store);
Router.get("/followers/:email/artists", authenticate, FollowController.list);

Router.post("/like", authenticate, LikeController.store);
Router.get("/like/:email/musics", authenticate, LikeController.list);

module.exports = Router;
