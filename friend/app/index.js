import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import AddFriendScreen from './AddFriendScreen';
import FriendDetailScreen from './FriendDetailScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const [friends, setFriends] = useState([]);

  return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home">
          {props => <HomeScreen {...props} friends={friends} setFriends={setFriends} />}
        </Stack.Screen>
        <Stack.Screen name="AddFriend">
          {props => <AddFriendScreen {...props} setFriends={setFriends} />}
        </Stack.Screen>
        <Stack.Screen name="FriendDetail" component={FriendDetailScreen} />
      </Stack.Navigator>
  );
}
