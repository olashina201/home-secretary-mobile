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
          <MaterialCommunityIcons name="home" size={size} color={color} />
        ),
      }}
    />
    {/* <Tab.Screen
      name="Home2"
      component={AuthNavigator}
      options={({ navigation }) => ({
        // tabBarButton: () => <NewListingButton onPress={() => navigation.navigate(routes.LISTING_EDIT)} />,
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="plus-circle" size={size} color={color} />
        ),
      })}
    />
    <Tab.Screen
      name="Home3"
      component={HomeNavigator}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="account" size={size} color={color} />
        ),
      }}
    /> */}
  </Tab.Navigator>
);

export default AppNavigator;