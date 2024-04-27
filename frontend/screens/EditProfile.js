import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import styles from "../styles/EditProfileStyles";
import axios from 'axios';

function EditProfile() {
    const [userInfo, setUserInfo] = useState({
        'firstName': '',
        'lastName': '',
        'bio': '',
    });
    const [editSuccess, setEditSuccess] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8080/api/get-user-info', {params: {id: -1}})
            .then(response => {
                console.log(response.data);
                setUserInfo(response.data);
            })
            .catch(error => {
                console.log(error.response.data);
            })
    }, [])

    const handleChange = (key, value) => {
        setUserInfo({...userInfo, [key]: value});
      }

    const handleSubmit = () => {
        axios.post('http://localhost:8080/api/edit-user-info', userInfo)
            .then(response => {
                console.log(userInfo);
                console.log(response.data);
                setEditSuccess(true);
            })
            .catch(error => {
                console.log(error.response.data);
            })
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="First Name"
                value={userInfo.firstName}
                onChangeText={(text) => handleChange('firstName', text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Last Name"
                value={userInfo.lastName}
                onChangeText={(text) => handleChange('lastName', text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Biography"
                multiline
                numberOfLines={4}
                value={userInfo.bio}
                onChangeText={(text) => handleChange('bio', text)}
            />
            {editSuccess ? <Text style={styles.editMade}> Succesfully Edited Profile! </Text> : null }
            <Button title="Submit" onPress={handleSubmit} />
        </View>
    );
};

export default EditProfile;