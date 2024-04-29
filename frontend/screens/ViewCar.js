//screen for searching for users to follow, displays all users in db
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import styles from "../styles/SearchStyles";
import axios from 'axios';
import images from '../components/Images';
import { CommonActions } from '@react-navigation/native';

function ViewCar({navigation, route}) {
    const [results, setResults] = useState([]);
    const [joinStatus, setStatus] = useState({});

    useEffect(() => {
        getPassengerList();
        getUserJoinStatus();
    }, []);

    const Person = ({id, firstName, lastName, profilePicture}) => {
        return (
            <TouchableOpacity style={styles.resultItem} onPress={() => navigation.replace("View Profile", id)}>
                <View style={styles.picContainer}> 
                    <Image source={images[profilePicture]} style={styles.profilePicture}/>
                </View>
                <Text style={styles.searchText}>{firstName} {lastName}</Text>
            </TouchableOpacity>
        );
    }

    const getPassengerList = () => {
        axios.get("http://localhost:8080/api/get-passengers-list", {params: {id: route.params}}) //pass in car id
            .then(response => {
                console.log(response.data);
                setResults(response.data);
            })
            .catch(error => {
                console.log(error.response.data);
            });
    }

    const getUserJoinStatus = () => {
        axios.get("http://localhost:8080/api/get-car-join-status", {params: {id: route.params}})
            .then(response => {
                console.log(response.data);
                setStatus(response.data);
            })
            .catch(error => {
                console.log(error.response.data);
            });
    }

    const handleJoinCar = () => {
        axios.get("http://localhost:8080/api/join-car", {params: {id: route.params}})
            .then(response => {
                console.log(response.data);
                getUserJoinStatus();
                getPassengerList();
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
            {joinStatus.status === "true" ? 
            <TouchableOpacity style={styles.joinedButton} >
                <Text style={styles.buttonText}>{joinStatus.car}</Text>
            </TouchableOpacity>
            : joinStatus.capacity === "true" ?
            <TouchableOpacity style={styles.joinedButton} >
                <Text style={styles.buttonText}>Car Full</Text>
            </TouchableOpacity>
            :
            <TouchableOpacity style={styles.joinButton} onPress={handleJoinCar}>
                <Text style={styles.buttonText}>Join Car</Text>
            </TouchableOpacity>

            }
            <FlatList
                data={results}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Person id={item.id} firstName={item.firstName} lastName={item.lastName} profilePicture={item.profilePicture} />
                )}
            />
        </View>
    );
}

export default ViewCar;