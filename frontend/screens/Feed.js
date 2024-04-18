import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from "../styles/FeedStyles";
import Navigation from "./Navigation"

function Feed({navigation}) {
  return (
    <Navigation navigation={navigation} >
      <View style={styles.container}>
        <Text style={styles.header}> At a Glance </Text>
        {/* Add your home screen content here */}
      </View>
    </Navigation>
  );
}

export default Feed;