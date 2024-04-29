import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MessageBox = ({ name, message, avatarColor }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.avatar, { backgroundColor: avatarColor }]} />
      <View style={styles.messageContainer}>
        <Text style={styles.name}>Host: {name}</Text>
        <Text style={styles.message}>{message}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
    backgroundColor: '#F0F0F0',
    borderRadius: 8,
    paddingHorizontal:16,
    paddingVertical: 20,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  messageContainer: {
    flex: 0,
    maxHeight: 60,
    minWidth: '95%'
  },
  name: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  message: {
    color: '#333333',
    flexShrink: 1,
  },
});

export default MessageBox;