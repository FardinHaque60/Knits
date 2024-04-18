import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import axios from 'axios';
import styles from "../styles/LoginStyles";

function Login({ navigation }) {
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

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Enter Username</Text>
      <Text>Enter Password</Text>
      <Button
        title="Login"
        onPress={() => navigation.navigate('Feed')}
        style={styles.button}
      />
    </View>
  );
}

export default Login;