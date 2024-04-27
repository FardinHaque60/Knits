import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import Navigation from '../components/Navigation';
import MessageBox from '../components/MessageBox';

const Hangouts = ({ navigation }) => {

  //example messages, im assuming fetch all messages from db and then put it here,
  const messages = [
    { name: 'David Taylor', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', avatarColor: '#76D7C4' },
    { name: 'Sydney Myers', message: 'I am all the way on red care. A help.', avatarColor: '#A56CC1' },
    // Add more messages as needed
  ];

  return (
    <Navigation navigation={navigation}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Hangouts:</Text>
          <TouchableOpacity style={styles.newChatButton}>
            <Text style={styles.newChatButtonText}>New Chat</Text>
          </TouchableOpacity>
        </View>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          {messages.map((message, index) => (
            <MessageBox
              key={index}
              name={message.name}
              message={message.message}
              avatarColor={message.avatarColor}
            />
          ))}
        </ScrollView>
      </View>
    </Navigation>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  newChatButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
  },
  newChatButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  scrollViewContent: {
    paddingBottom: 16,
  },
});

export default Hangouts;