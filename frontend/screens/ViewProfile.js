//screen for viewing OTHER USERS profile
import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import styles from "../styles/ProfileStyles";
import images from "../components/Images";
import Post from "../components/Post";
import axios from "axios";
import Navigation from '../components/Navigation';

function ViewProfile({navigation, route}) {
    const [userData, setUserData] = useState({});
    const [userPosts, setPosts] = useState([])
    const [userStats, setUserStats] = useState({ 'posts': 0, 'following': 0, 'followers': 0});

    useEffect(() => {
        axios.get('http://localhost:8080/api/get-user-info', {params: {id: route.params}}) //passing in id of users profile
            .then(response => { //expect dictionary of user info
                console.log(response.data);
                setUserData(response.data);
            })
            .catch(error => {
                console.log(error.response.data);
            })
        axios.get("http://localhost:8080/api/get-user-posts", {params: {id: route.params}})
            .then(response => {
                console.log(response.data);
                setPosts(response.data);
            })
            .catch(error => {
                console.log(error.response.data);
            })
        /* 
        axios.get('http://localhost:8080/api/get-user-stats', {params: {id: route.params}})
            .then(response => {
                console.log(response.data);
                setUserStats(response.data);
            })
            .catch(error => {
                console.log(error.response.data);
            })
        */
    }, [])

    return (
        <Navigation navigation={navigation}> 
            <View style={styles.container}>
                {/* User info and action buttons */}
                <View style={styles.profileHeader}>
                    <View style={styles.avatarContainer}> 
                        <Image source={images[userData.profilePicture]} style={styles.avatarImage} />
                    </View>
                    <Text style={styles.userName}>{`${userData.firstName} ${userData.lastName}`}</Text>
                </View>

                {/* Stats */}
                <View style={styles.statsContainer}>
                    <View style={styles.statBox}>
                        <Text style={styles.statNumber}>{userStats.posts}</Text>
                        <Text style={styles.statLabel}>posts</Text>
                    </View>
                    <View style={styles.statBox}>
                        <Text style={styles.statNumber}>{userStats.followers}</Text>
                        <Text style={styles.statLabel}>followers</Text>
                    </View>
                    <View style={styles.statBox}>
                        <Text style={styles.statNumber}>{userStats.following}</Text>
                        <Text style={styles.statLabel}>following</Text>
                    </View>
                </View>

                {/* User handle and website */}
                <View style={styles.handleContainer}>
                    <Text style={styles.handleText}> {userData.bio} </Text>
                </View>

                <FlatList
                    data={userPosts}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                    <Post id={item.id} author={item.author} body={item.body} date={item.date} time={item.time}/>
                    )}
                />
            </View>
        </Navigation>
    );
}

export default ViewProfile;