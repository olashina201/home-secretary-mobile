import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";

import HomeNavigator from "./HomeNavigator";
import ChatNavigation from "./ChatNavigation";
import HomeIcon from "../components/HomeIcon";
import colors from "../config/colors";

const Tab = createBottomTabNavigator();
const AppNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarShowLabel: false,
    }}
  >
    <Tab.Screen
      name="Boards"
      component={HomeNavigator}
      options={{
        headerShown: false,
        tabBarIcon: ({ size, color }) => <HomeIcon />,
      }}
    />
    <Tab.Screen
      name="Chat"
      component={ChatNavigation}
      options={{
        headerShown: false,
        tabBarActiveTintColor: colors.light,
        tabBarIcon: ({ size, color }) => (
          <MaterialIcons name="chat-bubble" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Notifications"
      component={ChatNavigation}
      options={{
        headerShown: false,
        tabBarIcon: ({ size, color }) => (
          <MaterialIcons name="notifications" size={24} color={colors.light} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={HomeNavigator}
      options={{
        headerShown: false,
        tabBarIcon: ({ size, color }) => (
          <MaterialIcons name="person" size={size} color={colors.light} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default AppNavigator;
