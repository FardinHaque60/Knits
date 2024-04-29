import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import styles from "../styles/EditProfileStyles";
import axios from 'axios';

function CreateHangout() {
    const [hangoutInfo, setHangoutInfo] = useState({
        'description': '',
        'date': '',
        'time': '',
    });
    const [createSuccess, setCreateSuccess] = useState(false);

    const handleChange = (key, value) => {
        setHangoutInfo({...hangoutInfo, [key]: value});
      }

    const handleSubmit = () => {
        axios.post('http://localhost:8080/api/create-hangout', hangoutInfo)
            .then(response => {
                console.log(hangoutInfo);
                console.log(response.data);
                setCreateSuccess(true);
            })
            .catch(error => {
                console.log(error.response.data);
            })
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Description"
                value={hangoutInfo.description}
                onChangeText={(text) => handleChange('description', text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Date"
                value={hangoutInfo.date}
                onChangeText={(text) => handleChange('date', text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Time"
                value={hangoutInfo.time}
                onChangeText={(text) => handleChange('time', text)}
            />
            {createSuccess ? <Text style={styles.editMade}> Succesfully Created Hangout! </Text> : null }
            <Button title="Create" onPress={handleSubmit} />
        </View>
    );
};

export default CreateHangout;