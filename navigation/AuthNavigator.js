import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../screens/Login";
import Register from "../screens/Register";
import Welcome from "../screens/Welcome";
import Home from "../screens/Home";

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
    <Stack.Screen name="Register" component={Register} />
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Home" component={Home} />
  </Stack.Navigator>
);

export default AuthNavigator;
 