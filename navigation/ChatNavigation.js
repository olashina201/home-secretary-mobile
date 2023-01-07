import React from 'react'
import Messages from '../screens/Messages'
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const ChatNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Chats" component={Messages} options={{ headerShown: true }} />
    </Stack.Navigator>
  )
}

export default ChatNavigation