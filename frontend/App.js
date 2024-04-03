import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import axios from 'axios';

export default function App() {
  const [userData, setData] = useState([]);

  {/* we can go to this link to see debugging info for backend */}
  useEffect(() => {
    axios.get('http://localhost:8080/api/users')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []); 

  const renderItem = ({ item }) => (
    <Text style={styles.item}> {item.name}: {item.email} </Text>
  );

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Below is all the users: </Text>
        {/* causes list to move above text out */}
        <FlatList
          contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}
          data={userData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()} // Assuming id is unique
        />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
});
