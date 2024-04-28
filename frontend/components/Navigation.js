import React from 'react';
import {  View, Text, TouchableOpacity } from 'react-native';
import styles from "../styles/NavigationStyles";
import { CommonActions } from '@react-navigation/native';

function Navigation({ navigation, children }) {

  return (
    <View style={styles.container}>
      <View style={styles.content}>{children}</View>
      <View style={styles.navigationBar}>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [
                { name: 'Feed' },
              ],
            })
          )}
        >
          <Text style={styles.navIcon}> 🏠 </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [
                { name: 'Hangouts' },
              ],
            })
          )}
        >
          <Text style={styles.navIcon}> 🚗 </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [
                { name: 'Profile' },
              ],
            })
          )}
        >
          <Text style={styles.navIcon}> 👤 </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Navigation;