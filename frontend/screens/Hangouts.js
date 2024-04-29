import React, {useEffect, useState} from 'react';
import { View, Text, ScrollView, TouchableOpacity, FlatList} from 'react-native';
import Navigation from '../components/Navigation';
import JoinMessageBox from '../components/JoinMessageBox';
import HostMessageBox from '../components/HostMessageBox';
import styles from "../styles/HangoutStyles";
import axios from 'axios';

const Hangouts = ({ navigation }) => {

  //example messages, im assuming fetch all messages from db and then put it here,
  const [hangouts, setHangouts] = useState([]);
  const [hangoutState, setHangoutState] = useState("Join"); //for toggle button top left hand corner

  useEffect(() => {
    if (hangoutState === "Join") {
      fetchJoinHangouts();
    }
    else {
      fetchHostingHangouts();
    }
  }, [])

  const toggleHangout = () => {
    if (hangoutState === "Host") {
      setHangoutState("Join");
      fetchJoinHangouts();
    }
    else {
      setHangoutState("Host");
      fetchHostingHangouts();
    }
  };

  const fetchHostingHangouts = () => {
    axios.get("http://localhost:8080/api/get-host-hangouts")
      .then(response => {
        console.log(response.data);
        setHangouts(response.data);
      })
      .catch(error => {
        console.log(error.response.data);
      });
  }

  const fetchJoinHangouts = () => {
    axios.get("http://localhost:8080/api/get-join-hangouts")
      .then(response => {
        console.log(response.data);
        setHangouts(response.data);
      })
      .catch(error => {
        console.log(error.response.data);
      });
  }

  const renderItem = (item) => {
      if (hangoutState === "Join") {
        return (
          <JoinMessageBox navigation={navigation} id={item.id} name={item.host} message={item.description} picture={item.picture} date={item.date} time={item.time} />
        )
      }
      else {
        return (
          <HostMessageBox navigation={navigation} id={item.id} name={item.host} message={item.description} picture={item.picture} date={item.date} time={item.time} /> 
        )
      }
  }

  return (
    <Navigation navigation={navigation}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>

        {hangoutState === "Join" ? 
        <TouchableOpacity style={styles.joinHangout} onPress={toggleHangout}>
            <Text style={styles.hangoutText}>Join Hangouts: </Text>
        </TouchableOpacity>
        :
        <TouchableOpacity style={styles.hostedHangout} onPress={toggleHangout}>
            <Text style={styles.hangoutText}>Hosted Hangouts: </Text>
        </TouchableOpacity>
        } 
        <TouchableOpacity style={styles.newChatButton} onPress={() => navigation.navigate("Create Hangout")}>
          <Text style={styles.newChatButtonText}>New Hangout</Text>
        </TouchableOpacity>
        </View>
        <FlatList
          data={hangouts}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.scrollViewContent}
          renderItem={({ item }) => (renderItem(item))}
        />
      </View>
    </Navigation>
  );
};

export default Hangouts;