//screen for searching for users to follow, displays all users in db
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput, FlatList, Image } from 'react-native';
import styles from "../styles/SearchStyles";
import axios from 'axios';
import images from '../components/Images';

function Search({navigation}) {
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8080/api/search-users", {params: {searchQuery: searchQuery}})
            .then(response => {
                console.log(response.data);
                setSearchResults(response.data);
            })
            .catch(error => {
                console.log(error.response.data);
            });
    }, [searchQuery]);

    const SearchResult = ({id, firstName, lastName, profilePicture}) => {
        return (
            <TouchableOpacity style={styles.resultItem} onPress={() => navigation.replace("View Profile", id)}>
                <View style={styles.picContainer}> 
                    <Image source={images[profilePicture]} style={styles.profilePicture}/>
                </View>
                <Text style={styles.searchText}>{`${firstName} ${lastName}`}</Text>
            </TouchableOpacity>
        );
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.searchInput}
                placeholder="Search..."
                onChangeText={(text) => setSearchQuery(text)}
                value={searchQuery}
            />
            <FlatList
                data={searchResults}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <SearchResult id={item.id} firstName={item.firstName} lastName={item.lastName} profilePicture={item.profilePicture} />
                )}
            />
        </View>
    );
}

export default Search;