import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import HomeNavigator from "./HomeNavigator";

const Tab = createBottomTabNavigator();
const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Home"
      component={HomeNavigator}
      options={{
        headerShown: false,
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="table-settings" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Analytics"
      component={HomeNavigator}
      options={{
        headerShown: false,
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="google-analytics" size={size} color={color} />
        ),
      }}
    />
    {/* <Tab.Screen
      name="Home2"
      component={HomeNavigator}
      options={({ navigation }) => ({
        tabBarButton: () => <NewListingButton />,
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="plus-circle" size={size} color={color} />
        ),
      })}
    /> */}
    <Tab.Screen
      name="Chats"
      component={HomeNavigator}
      options={{
        headerShown: false,
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="chat" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Settings"
      component={HomeNavigator}
      options={{
        headerShown: false,
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="account-settings" size={size} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default AppNavigator;
