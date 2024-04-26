//screen for searching for users to follow, displays all users in db
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput, FlatList } from 'react-native';
import styles from "../styles/SearchStyles";
import axios from 'axios';

function Search({navigation}) {
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([
        {"id": 1, "firstName": "Testing", "lastName": "Another"},
        {"id": 2, "firstName": "Testing", "lastName": "Another"},
        {"id": 3, "firstName": "Testing", "lastName": "Another"},
        {"id": 4, "firstName": "Testing", "lastName": "Another"},
        {"id": 5, "firstName": "Testing", "lastName": "Another"},
    ])

    useEffect(() => {
        console.log(searchQuery);
        axios.get("http://localhost:8080/api/search-users", {params: {searchQuery: searchQuery}})
            .then(response => {
                console.log(response.data);
                setSearchResults(response.data);
            })
            .catch(error => {
                console.log(error.response.data);
            });
    }, [searchQuery]);

    const SearchResult = ({id, firstName, lastName}) => {
        return (
            <TouchableOpacity style={styles.resultItem} onPress={() => navigation.navigate("View Profile", { id: id })}>
                <Text>{`${firstName} ${lastName}`}</Text>
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
                    <SearchResult id={item.id} firstName={item.firstName} lastName={item.lastName} />
                )}
            />
        </View>
    );
}

export default Search;