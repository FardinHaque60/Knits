import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, Button } from 'react-native';
import axios from 'axios';
import styles from "../styles/EntranceStyles";
import { LinearGradient } from 'expo-linear-gradient';

function Login({ navigation }) {
  const [loginForm, setForm] = useState({
    'email': '',
    'password': '',
  });

  const handleChange = (key, value) => {
    setForm({...loginForm, [key]: value});
  }

  const [credentials, setCredentials] = useState(true); //for invalid credentials message

  const handleLogin = () => {
    axios.post('http://localhost:8080/api/login', loginForm)
      .then(response => {
        console.log(response.data);
        navigation.navigate('Feed');
      })
      .catch(error => {
        console.log(error.response.data);
        if (error.response.data === "Invalid Credentials")
          setCredentials(false);
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
          keyboardType="email-address"
          placeholder='Email'
          textContentType='emailAddress'
          value={loginForm.email}
          autoCapitalize="none"
          onChangeText={(value) => handleChange('email', value)}
        />
        <TextInput
          style={styles.input}
          placeholder='Password'
          textContentType='password'
          value={loginForm.password}
          onChangeText={(value) => handleChange('password', value)}
          secureTextEntry
        />
        {!credentials ? <Text style={styles.error}> Invalid Credentials </Text> : null }
        <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>  
          <Text style={styles.buttonText} onPress={handleLogin}>Login</Text>
        </TouchableOpacity>
        <View style={styles.bottomContainer}>
          <View style={styles.horizontalLine}></View> 
          <Text style={styles.text}> Or </Text> 
          <View style={styles.horizontalLine}></View> 
        </View>
        <Button
          title='Create Account'
          color='#0c1bf2'
          onPress={() => navigation.navigate('Create-Account')}
        />
      </View>
    </LinearGradient>
  );
}

export default Login;