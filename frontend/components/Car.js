import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TouchableWithoutFeedback } from 'react-native';
import images from "./Images";

function CarBox({ navigation, id, driver, picture, date, time, capacity}) { //joinStatus = joinable?, state = host/join?
  const [status, setStatus] = useState("false");
  const viewCar = () => {
    navigation.navigate("View Car", id); //id = car id
  };

  return (
    <View style={styles.container}>
      <View style={styles.hangoutDesc}> 
        <View style={styles.picContainer}>
          <Image source={images[picture]} style={styles.reccPic} /> 
        </View>
        <View style={styles.messageContainer}>
          <Text style={styles.name}>Driver: {driver}</Text>
          <Text style={styles.message}>capacity: {capacity}</Text>
          <View style={styles.timeFooter}> 
            <Text style={styles.postDate}>Depart: </Text>
            <Text style={styles.postDate}>{date}, </Text>
            <Text style={styles.postDate}>{time}</Text>
          </View>
        </View>
      </View>
      <View style={styles.buttonContainer}> 
      {status === "true" ?
        <TouchableOpacity style={styles.joinedHangout}>
          <Text style={styles.joinHangoutText}> Joined ✔</Text>
        </TouchableOpacity> 
      : null}
        <TouchableOpacity style={styles.joinHangout} onPress={viewCar}>
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
    backgroundColor: '#007AFF',
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

export default CarBox;