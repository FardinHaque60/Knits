import styles from "../styles/FeedStyles";
import { Image, TouchableOpacity } from 'react-native';
import React from 'react';
import axios from 'axios';

function LogoutButton({navigation}) {

    const handleLogout = () => {
      axios.get("http://localhost:8080/api/logout")
        .then(response => {
          console.log(response.data);
          navigation.navigate('Login');
        })
        .catch(error => {
          console.log(error.response.data);
        }) 
    }

    return (
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <Image source= { require('../assets/logout.png') } style={styles.logoutIcon} /> 
        </TouchableOpacity>
    )
}

export default LogoutButton;