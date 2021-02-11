import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ArtistListScreen from "../pages/ArtistListScreen";
import MusicScreen from "../pages/MusicScreen";
import PlaylistScreen from "../pages/PlaylistScreen";
import FollowScreen from "../pages/FollowScreen";
import LikeScreen from "../pages/LikeScreen";

const Tabs = createBottomTabNavigator();

const Routes = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="MusicScreen" component={MusicScreen} />
      <Tabs.Screen name="ArtistListScreen" component={ArtistListScreen} />
      <Tabs.Screen name="LikeScreen" component={LikeScreen} />
      <Tabs.Screen name="FollowScreen" component={FollowScreen} />
      <Tabs.Screen name="PlaylistScreen" component={PlaylistScreen} />
    </Tabs.Navigator>
  );
};

export default Routes;
