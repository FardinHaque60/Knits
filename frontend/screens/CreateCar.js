import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import styles from "../styles/EditProfileStyles";
import axios from 'axios';
import { CommonActions } from '@react-navigation/native';

function CreateCar({navigation, route}) {
    const [carInfo, setCarInfo] = useState({
        'hangoutID': route.params,
        'departTime': '',
        'departDate': '',
        'capacity': '',
    });
    const [createSuccess, setCreateSuccess] = useState(false);

    const handleChange = (key, value) => {
        setCarInfo({...carInfo, [key]: value});
      }

    const handleSubmit = () => {
        axios.post('http://localhost:8080/api/create-car', carInfo)
            .then(response => {
                console.log(carInfo);
                console.log(response.data);
                setCreateSuccess(true);
                navigation.dispatch(
                    CommonActions.reset({
                      index: 0,
                      routes: [
                        { name: 'Hangouts' },
                      ],
                    })
                  )
            })
            .catch(error => {
                console.log(error.response.data);
            })
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Depart Date"
                value={carInfo.description}
                onChangeText={(text) => handleChange('departDate', text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Depart Time"
                value={carInfo.date}
                onChangeText={(text) => handleChange('departTime', text)}
            />
            <TextInput
                keyboardType='numeric'
                style={styles.input}
                placeholder="Seats in Car"
                value={carInfo.time}
                onChangeText={(text) => handleChange('capacity', text)}
            />
            {createSuccess ? <Text style={styles.editMade}> Succesfully Added Car! </Text> : null }
            <Button title="Create" onPress={handleSubmit} />
        </View>
    );
};

export default CreateCar;