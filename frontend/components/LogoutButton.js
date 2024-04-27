import styles from "../styles/FeedStyles";
import { Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { CommonActions } from "@react-navigation/native";
import axios from 'axios';

function LogoutButton({navigation}) {

    const handleLogout = () => {
      axios.get("http://localhost:8080/api/logout")
        .then(response => {
          console.log(response.data);
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [
                { name: 'Login' },
              ],
            })
          )
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