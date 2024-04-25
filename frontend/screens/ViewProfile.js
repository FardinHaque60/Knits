//screen for viewing OTHER USERS profile
import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import styles from "../styles/ProfileStyles";

function ViewProfile({navigation, route}) {
    const [userProfile, setProfiile] = useState({
        'firstName': '',
        'lastNane': '',
        'bio': '',
    });
    const [userPosts, setPosts] = useState([
        {'id': '', 'author': '', 'body': ''},
    ])

    useEffect(() => {
        console.log(route.params);
        /* 
        axios.get('http://localhost:8080/api/view-profile', route.params) //passing in id of users profile
            .then(response => { //expect dictionary of user info
                const userData = response.data;
                console.log(userData);
            })
            .catch(error => {
                console.log(error.response.data);
            })
        axios.get("http://localhost:8080/api/get-user-posts", route.params)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.log(error.response.data);
            })
        */
    })

    return (
    <View style={styles.container}>
        <Text> Profile </Text>
        {/* Add your home screen content here */}
    </View>
    );
}

export default ViewProfile;