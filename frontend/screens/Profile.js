import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import styles from "../styles/ProfileStyles";
import Navigation from "./Navigation";
import axios from 'axios';

function Profile({ navigation }) {
    const [username, setUsername] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/getCurrentUser');
                setUsername(response.data.firstName); // Assuming the username is in response.data
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <Navigation navigation={navigation} >
            <View style={styles.container}>
                <Text>Profile</Text>
                <Text style={styles.header}>{username}</Text>
                {/* Add your home screen content here */}
            </View>
        </Navigation>
    );
}

export default Profile;
