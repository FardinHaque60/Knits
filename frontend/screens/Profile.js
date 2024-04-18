import React, { useState } from 'react';
import { View, Text } from 'react-native';
import styles from "../styles/ProfileStyles";
import Navigation from "./Navigation"

function Feed({navigation}) {
    const [username, setUsername] = useState('');

    return (
        <Navigation navigation={navigation} >
        <View style={styles.container}>
            <Text> Profile </Text>
            <Text style={styles.header}> {username} </Text>
            {/* Add your home screen content here */}
        </View>
        </Navigation>
    );
}

export default Feed;