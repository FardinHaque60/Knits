//screen for viewing OTHER USERS profile
import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import styles from "../styles/ViewHangoutStyles";
import images from "../components/Images";
import axios from "axios";
import Car from "../components/Car";
import { CommonActions } from '@react-navigation/native';

function ViewHangout({navigation, route}) {
    const [hangoutData, setHangoutData] = useState({});
    const [hangoutCars, setHangoutCars] = useState([]);
    const [joinStatus, setJoinStatus] = useState({
        "status": "false",
        "date": "",
        "time": "",
    });

    useEffect(() => {
        axios.get('http://localhost:8080/api/get-hangout-info', {params: {id: route.params}}) //passing in hangout id
            .then(response => { //expect dictionary of user info
                console.log(response.data);
                setHangoutData(response.data);
            })
            .catch(error => {
                console.log(error.response.data);
            });
        axios.get("http://localhost:8080/api/get-hangout-cars", {params: {id: route.params}}) //pass in hangout id
            .then(response => {
                console.log(response.data);
                setHangoutCars(response.data);
            })
            .catch(error => {
                console.log(error.response.data);
            })
        axios.get("http://localhost:8080/api/get-hangout-join-status", {params: {id: route.params}}) //pass in hangout id
            .then(response => {
                console.log(response.data);
                setJoinStatus(response.data);
            })
            .catch(error => {
                console.log(error.response.data);
            })
    }, []);

    const driveCar = () => {
        navigation.navigate("Create Car", hangoutData.id);
    }

    const handleLeave = () => {
        axios.get("http://localhost:8080/api/leave-hangout", {params: {id: route.params}})
            .then(response => {
                console.log(response.data);
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
            });
    }

    return (
        <View style={styles.container}>
            {/* User info and action buttons */}
            <View style={styles.profileHeader}>
                <View style={styles.avatarContainer}> 
                    <Image source={images[hangoutData.picture]} style={styles.avatarImage} />
                </View>
                <View> 
                    <Text style={styles.userName}>Host: {hangoutData.host}</Text>
                    {joinStatus.status === "false" ? 
                        <TouchableOpacity style={styles.driveCarButton} onPress={driveCar}> 
                            <Text style={styles.joinText}> + Drive Car </Text>
                        </TouchableOpacity>
                        :
                        <View> 
                            <TouchableOpacity style={styles.joinedLabel}> 
                                <Text style={styles.joinText}> Joined Hangout on {joinStatus.date} {joinStatus.time} </Text>
                            </TouchableOpacity>
                        </View>
                        }
                </View>
            </View>

            {/* User handle and website */}
            <View style={styles.handleContainer}>
                <Text style={styles.handleText}> {hangoutData.description} </Text>
                <Text style={styles.handleText}> {hangoutData.date} {hangoutData.time} </Text>
            </View>
            <View style={styles.carsContainer}> 
                <View style={styles.header}>
                    <Text style={styles.carsText}>Cars</Text>
                    {joinStatus.status === "true" ? 
                    <TouchableOpacity style={styles.leaveButton} onPress={handleLeave}>
                        <Text style={styles.buttonText}>Leave</Text>
                    </TouchableOpacity>
                    : null}
                </View>
                {hangoutCars.length === 0 ?
                    <Text style={{ textAlign: 'center', marginTop: 20 }}>No Drivers Yet!</Text>
                :
                    <FlatList
                        data={hangoutCars}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                        <Car navigation={navigation} id={item.id} driver={item.driver} picture={item.driverPicture} date={item.date} time={item.time} capacity={item.capacity}/>
                        )}
                    />
                }
            </View>
        </View>
    );
}

export default ViewHangout;