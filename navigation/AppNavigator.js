import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";

import HomeNavigator from "./HomeNavigator";
import ChatNavigation from "./ChatNavigation";
import HomeIcon from "../components/HomeIcon";
import NotificationNavigator from "./NotificationNavigator";

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
        tabBarIcon: ({ size, color }) => <HomeIcon color={color} />,
      }}
    />
    <Tab.Screen
      name="Messages"
      component={ChatNavigation}
      options={{
        headerShown: false,
        // tabBarActiveTintColor: colors.light,
        tabBarIcon: ({ size, color }) => (
          <MaterialIcons name="chat-bubble" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Notifications"
      component={NotificationNavigator}
      options={{
        headerShown: false,
        tabBarIcon: ({ size, color }) => (
          <MaterialIcons name="notifications" size={24} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={HomeNavigator}
      options={{
        headerShown: false,
        tabBarIcon: ({ size, color }) => (
          <MaterialIcons name="person" size={size} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default AppNavigator;
