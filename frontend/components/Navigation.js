import React from 'react';
import {  View, Text, TouchableOpacity } from 'react-native';
import styles from "../styles/NavigationStyles";

function Navigation({ navigation, children }) {

  return (
    <View style={styles.container}>
      <View style={styles.content}>{children}</View>
      <View style={styles.navigationBar}>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate('Feed')}
        >
          <Text style={styles.navIcon}> 🏠 </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate('Hangouts')}
        >
          <Text style={styles.navIcon}> 🚗 </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate('Profile')}
        >
          <Text style={styles.navIcon}> 👤 </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Navigation;