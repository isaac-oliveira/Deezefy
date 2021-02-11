import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ArtistListScreen from "../pages/ArtistListScreen";
import MusicScreen from "../pages/MusicScreen";
import PlaylistScreen from "../pages/PlaylistScreen";
import FollowScreen from "../pages/FollowScreen";
import LikeScreen from "../pages/LikeScreen";
import { color } from "../themes";

const Tabs = createBottomTabNavigator();

const Routes = () => {
  return (
    <Tabs.Navigator
      tabBarOptions={{
        labelPosition: "beside-icon",
        activeTintColor: color.rosa,
      }}
    >
      <Tabs.Screen
        name="MusicScreen"
        component={MusicScreen}
        options={{ tabBarLabel: "Música" }}
      />
      <Tabs.Screen
        name="ArtistListScreen"
        component={ArtistListScreen}
        options={{ tabBarLabel: "Artista" }}
      />
      <Tabs.Screen
        name="LikeScreen"
        component={LikeScreen}
        options={{ tabBarLabel: "Curte" }}
      />
      <Tabs.Screen
        name="FollowScreen"
        component={FollowScreen}
        options={{ tabBarLabel: "Segue" }}
      />
      <Tabs.Screen
        name="PlaylistScreen"
        component={PlaylistScreen}
        options={{ tabBarLabel: "Playlist" }}
      />
    </Tabs.Navigator>
  );
};

export default Routes;
