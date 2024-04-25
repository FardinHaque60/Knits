// navigation/AppNavigator.js

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Feed from '../screens/Feed';
import Login from '../screens/Login';
import CreateAccount from "../screens/CreateAccount";
import Hangouts from "../screens/Hangouts";
import Profile from "../screens/Profile";
import CreatePost from '../screens/CreatePost';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
      <Stack.Screen name="Feed" component={Feed} options={{ headerLeft: null }}/>
      <Stack.Screen name="Hangouts" component={Hangouts} options={{ headerLeft: null}}/>
      <Stack.Screen name="Create-Account" component={CreateAccount} options={{headerShown: false}}/>
      <Stack.Screen name="Profile" component={Profile} options={{headerLeft: null}}/>
      <Stack.Screen name="Create Post" component={CreatePost} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
