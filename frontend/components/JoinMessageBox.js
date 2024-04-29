import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TouchableWithoutFeedback } from 'react-native';
import images from "./Images";
import axios from 'axios';

function MessageBox({ navigation, id, name, message, picture, date, time}) { //joinStatus = joinable?, state = host/join?
  const viewHangout = () => {
    navigation.navigate("View Hangout", id);
  };
  const [joinState, setJoinState] = useState({ //indicator if joined hangout
    "status": "false", "date": "", "time": "",
  })

  useEffect(() => {
    axios.get("http://localhost:8080/api/get-hangout-join-status", {params: {id: id}}) //pass in hangout id
        .then(response => {
            console.log(response.data);
            setJoinState(response.data);
        })
        .catch(error => {
            console.log(error.response.data);
        })
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.hangoutDesc}> 
        <View style={styles.picContainer}>
          <Image source={images[picture]} style={styles.reccPic} /> 
        </View>
        <View style={styles.messageContainer}>
          <Text style={styles.name}>Host: {name}</Text>
          <Text style={styles.message}>{message}</Text>
          <View style={styles.timeFooter}> 
            <Text style={styles.postDate}> {date} </Text>
            <Text style={styles.postDate}> {time} </Text>
          </View>
        </View>
      </View>
      <View style={styles.buttonContainer}> 
      {joinState.status === "true" ?
        <TouchableOpacity style={styles.joinedHangout}>
          <Text style={styles.joinHangoutText}> Joined on: {joinState.date} {joinState.time}</Text>
        </TouchableOpacity> 
      : null}
        <TouchableOpacity style={styles.joinHangout} onPress={viewHangout}>
          <Text style={styles.joinHangoutText}> View </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#F0F0F0',
    marginVertical: 8,
    borderRadius: 8,
    width: '100%',
  },
  hangoutDesc: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around', 
    paddingHorizontal: 16,
    paddingBottom: 15, 
  },
  messageContainer: {
    flex: 0,
  },
  name: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  message: {
    color: '#333333',
  },
  joinHangout: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
  },
  joinedHangout: {
    backgroundColor: 'gray',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
  },
  joinHangoutText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  picContainer: {
    borderRadius: 50,
    borderWidth: 1, 
    borderColor: 'black',
    padding: 3,
    marginBottom: 5,
    marginRight: '5%',
  },
  reccPic: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  postDate: {
    fontStyle: 'italic',

  },
  timeFooter: {
    marginBottom: 'auto',
    flexDirection: 'row',
  },  
});

export default MessageBox;