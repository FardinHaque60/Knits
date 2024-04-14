import React, { useEffect, useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AppNavigator from './navigation/AppNavigation';

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>

    /*
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Below is all the users: </Text>
        <FlatList
          contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}
          data={userData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()} // Assuming id is unique
        />
      <StatusBar style="auto" />
    </View>
    */
  );
}
