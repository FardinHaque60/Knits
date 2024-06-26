// navigation/AppNavigator.js

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Feed from '../screens/Feed';
import Login from '../screens/Login';
import CreateAccount from "../screens/CreateAccount";
import Hangouts from "../screens/Hangouts";
import Profile from "../screens/Profile";
import CreatePost from '../screens/CreatePost';
import ViewProfile from "../screens/ViewProfile";
import LogoutButton from '../components/LogoutButton';
import Search from "../screens/Search";
import EditProfile from "../screens/EditProfile";
import People from "../screens/People";
import CreateHangout from "../screens/CreateHangout";
import ViewHangout from "../screens/ViewHangout";
import CreateCar from '../screens/CreateCar';
import ViewCar from "../screens/ViewCar";
//import YourHangout from "../screens/YourHangout";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
      <Stack.Screen name="Feed" component={Feed} options={ ({ navigation }) => ({ 
        animationEnabled: false,
        headerLeft: null,
        headerRight: () => (<LogoutButton navigation={navigation} />) })}/>
      <Stack.Screen name="Hangouts" component={Hangouts} options={{ headerLeft: null, animationEnabled: false}}/>
      <Stack.Screen name="Create-Account" component={CreateAccount} options={{headerShown: false}}/>
      <Stack.Screen name="Profile" component={Profile} options={{headerLeft: null, animationEnabled: false}}/>
      <Stack.Screen name="Create Post" component={CreatePost} />
      <Stack.Screen name="View Profile" component={ViewProfile} />
      <Stack.Screen name="Search" component={Search}/>
      <Stack.Screen name="Edit Profile" component={EditProfile} />
      <Stack.Screen name="People" component={People} />
      <Stack.Screen name="Create Hangout" component={CreateHangout} />
      <Stack.Screen name="View Hangout" component={ViewHangout} /> 
      <Stack.Screen name="Create Car" component={CreateCar}/>
      <Stack.Screen name="View Car" component={ViewCar} />
      {/* <Stack.Screen name="Your Hangout" component={YourHangout} /> */}
    </Stack.Navigator>
  );
};

export default AppNavigator;
