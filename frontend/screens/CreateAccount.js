import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, Button } from 'react-native';
import axios from 'axios';
import styles from "../styles/CreateAccountStyles";
import { LinearGradient } from 'expo-linear-gradient';

function Login({ navigation }) {
  const [accountForm, setForm] = useState({
    'firstName': '',
    'lastName': '',
    'email': '',
    'password': '',
    'confirmPassword': ''
  })

  const handleLogin = () => {
    axios.post('http://localhost:8080/api/create-account', accountForm)
      .then(response => {
        console.log(response.data);
        navigation.navigate('Feed');
      })
      .catch(error => {
        console.log(error.response.data);
      });
  }

  return (
    <LinearGradient
      colors={['#549da1', '#cc5bd9']}
      style={styles.container}
    > 
      <View style={styles.overlay}>
        <Image source={require('../assets/KnitsLogo.png')} style={styles.logo} />
        <TextInput
          style={styles.input}
          placeholder='First Name'
        />
        <TextInput
          style={styles.input}
          placeholder='Last Name'
        />
        <TextInput
          style={styles.input}
          keyboardType="email-address"
          placeholder='Email'
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder='Password'
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder='Re-enter Password'
          secureTextEntry
        />
        <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>  
          <Text style={styles.buttonText}>Create Account</Text>
        </TouchableOpacity>
        <View style={styles.bottomContainer}>
          <View style={styles.horizontalLine}></View> 
          <Text style={styles.text}> Or </Text> 
          <View style={styles.horizontalLine}></View> 
        </View>
        <Button
          title='Login'
          color='#0c1bf2'
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </LinearGradient>
  );
}

export default Login;