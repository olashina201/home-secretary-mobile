import React from 'react'
import Messages from '../screens/Messages'
import { createStackNavigator } from "@react-navigation/stack";
import Chat from '../screens/Chat';

const Stack = createStackNavigator();

const ChatNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Chats" component={Messages} options={{ headerShown: true }} />
      <Stack.Screen name="Chat" component={Chat} options={{ headerShown: true }} />
    </Stack.Navigator>
  )
}

export default ChatNavigation