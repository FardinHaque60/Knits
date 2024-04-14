// screens/HomeScreen.js

import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from "../styles/HomeStyles";

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Login"
        onPress={() => navigation.navigate('Login')}
        style={styles.button}
      />
    </View>
  );
}

export default HomeScreen;