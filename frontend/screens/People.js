//screen for searching for users to follow, displays all users in db
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import styles from "../styles/SearchStyles";
import axios from 'axios';
import images from '../components/Images';

function PeopleList({navigation, route}) {
    const [results, setResults] = useState([])

    useEffect(() => {
        if (route.params.state) { //route.params = true, load followers
            axios.get("http://localhost:8080/api/get-follower-list", {params: {id: route.params.id}})
                .then(response => {
                    console.log(response.data);
                    setResults(response.data);
                })
                .catch(error => {
                    console.log(error.response.data);
                });
        }
        else { //false means load following
            axios.get("http://localhost:8080/api/get-following-list", {params: {id: route.params.id}})
                .then(response => {
                    console.log(response.data);
                    setResults(response.data);
                })
                .catch(error => {
                    console.log(error.response.data);
                });
        }
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

    return (
        <View style={styles.container}>
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

export default PeopleList;