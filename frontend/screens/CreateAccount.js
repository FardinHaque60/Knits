import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, Button } from 'react-native';
import axios from 'axios';
import styles from "../styles/EntranceStyles";
import { LinearGradient } from 'expo-linear-gradient';

function CreateAccount({ navigation }) {
  const [accountForm, setForm] = useState({
    'firstName': '',
    'lastName': '',
    'email': '',
    'password': '',
    'confirmPassword': ''
  })

  const handleChange = (key, value) => {
    setForm({...accountForm, [key]: value});
  }

  const [emailAvailable, setEmailAvailable] = useState(true);
  const [validFields, setValidFields] = useState(true);
  const [validPassword, setValidPassword] = useState(true);
  const handleSubmit = () => {
    axios.post('http://localhost:8080/api/create-account', accountForm)
      .then(response => {
        console.log(response.data);
        navigation.replace('Feed');
      })
      .catch(error => {
        const msg = error.response.data;
        console.log(msg);
        if (msg === 'Invalid Fields') {
          setValidFields(false);
        }
        else if (msg === 'Email Already Used') {
          setEmailAvailable(false);
        }
        else if (msg === 'Passwords do not match') {
          setValidPassword(false);
        }
      });
  }

  return (
    <LinearGradient
      colors={['#549da1', '#cc5bd9']}
      style={styles.container}
    > 
      <View style={styles.overlay}>
        <Image source={require('../assets/KnitsText.png')} style={styles.logo} />
        <TextInput
          style={styles.input}
          value={accountForm.firstName}
          placeholder='First Name'
          onChangeText={(value) => handleChange('firstName', value)}
        />
        <TextInput
          style={styles.input}
          value={accountForm.lastName}
          placeholder='Last Name'
          onChangeText={(value) => handleChange('lastName', value)}
        />
        <TextInput
          style={styles.input}
          value={accountForm.email}
          keyboardType="email-address"
          placeholder='Email'
          autoCapitalize="none"
          onChangeText={(value) => handleChange('email', value)}
        />
        <TextInput
          style={styles.input}
          value={accountForm.password}
          placeholder='Password'
          onChangeText={(value) => handleChange('password', value)}
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder='Re-enter Password'
          onChangeText={(value) => handleChange('confirmPassword', value)}
          secureTextEntry
        />
        {!emailAvailable ? <Text style={styles.error}> Email Unavailable </Text> : null }
        {!validFields ? <Text style={styles.error}> Invalid Fields </Text> : null }
        {!validPassword ? <Text style={styles.error}> Passwords do not match </Text> : null }
        <TouchableOpacity onPress={handleSubmit} style={styles.loginButton}>  
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

export default CreateAccount;