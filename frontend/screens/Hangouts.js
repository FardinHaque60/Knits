import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from "../styles/FeedStyles";
import Navigation from "./Navigation"

function Hangouts({navigation}) {
  return (
    <Navigation navigation={navigation}>
      <View style={styles.container}>
        <Text> Hangouts: </Text>
        {/* Add your home screen content here */}
      </View>
    </Navigation>
  );
}

export default Hangouts;