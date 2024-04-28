import React from 'react';
import { View, Text, ScrollView, TouchableOpacity} from 'react-native';
import Navigation from '../components/Navigation';
import MessageBox from '../components/MessageBox';
import styles from "../styles/HangoutStyles";

const Hangouts = ({ navigation }) => {

  //example messages, im assuming fetch all messages from db and then put it here,
  const messages = [
    { name: 'Nas Reed', message: 'Join my hangout',  avatarColor: '#76D7C4' },
    { name: 'Lebron James', message: 'I am going to the beach', avatarColor: '#A56CC1' },
    // Add more messages as needed
  ];

  return (
    <Navigation navigation={navigation}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableOpacity style={styles.newChatButton}>
            <Text style={styles.newChatButtonText}>New Hangout</Text>
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

export default Hangouts;