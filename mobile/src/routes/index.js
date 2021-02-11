import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Tabs from "./tabs";
import Auth from "./auth";

import LoginScreen from "../pages/LikeScreen";
import PlayScreen from "../pages/PlayScreen";
import UpdateScreen from "../pages/UpdateScreen";
import useAuth from "../hooks/useAuth";

const Stack = createStackNavigator();

const Routes = () => {
  const { isLogged } = useAuth();

  if (!isLogged) return <Auth />;

  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Tabs" component={Tabs} />
      <Stack.Screen name="PlayScreen" component={PlayScreen} />
      <Stack.Screen name="UpdateScreen" component={UpdateScreen} />
    </Stack.Navigator>
  );
};

export default Routes;
