import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Notification from "../screens/Notification";

const Stack = createStackNavigator();

const NotificationNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Notifications"
        component={Notification}
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
  );
};

export default NotificationNavigator;
