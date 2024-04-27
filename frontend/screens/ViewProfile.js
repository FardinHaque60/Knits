//screen for viewing OTHER USERS profile
import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import styles from "../styles/ProfileStyles";
import images from "../components/Images";
import Post from "../components/Post";
import axios from "axios";
import Navigation from '../components/Navigation';
import UserStats from '../components/StatsRow';

function ViewProfile({navigation, route}) {
    const [userData, setUserData] = useState({});
    const [userPosts, setPosts] = useState([])
    const [userStats, setUserStats] = useState({});
    const [followStatus, setFollowStatus] = useState({
        "status": "false",
        "date": "",
    });

    useEffect(() => {
        axios.get('http://localhost:8080/api/get-user-info', {params: {id: route.params}}) //passing in id of users profile
            .then(response => { //expect dictionary of user info
                console.log(response.data);
                console.log(response.data.status);
                if (response.data.status === "invalid") {
                    navigation.replace("Profile")
                }
                setUserData(response.data);
            })
            .catch(error => {
                console.log(error.response.data);
            });
        axios.get("http://localhost:8080/api/get-user-posts", {params: {id: route.params}})
            .then(response => {
                console.log(response.data);
                setPosts(response.data);
            })
            .catch(error => {
                console.log(error.response.data);
            })
        axios.get("http://localhost:8080/api/get-following-status", {params: {id: route.params}})
            .then(response => {
                console.log(response.data);
                setFollowStatus(response.data);
            })
            .catch(error => {
                console.log(error.response.data);
            })
        fetchUserStats();
    }, []);

    const fetchUserStats = () => {
        axios.get('http://localhost:8080/api/get-user-stats', {params: {id: route.params}})
            .then(response => {
                console.log(response.data);
                setUserStats(response.data);
            })
            .catch(error => {
                console.log(error.response.data);
            })
    }

    const handleFollow = () => {
        axios.get("http://localhost:8080/api/following", {params: {id: route.params}})
            .then(response => {
                console.log(response.data);
                setFollowStatus(response.data);
                fetchUserStats();
            })
            .catch(error => {
                console.log(error.response.data);
            })
    }

    const handleUnfollow = () => {
        axios.get("http://localhost:8080/api/unfollow", {params: {id: route.params}})
            .then(response => {
                console.log(response.data);
                setFollowStatus(response.data);
                fetchUserStats();
            })
            .catch(error => {
                console.log(error.response.data);
            })
    }

    return (
        <Navigation navigation={navigation}> 
            <View style={styles.container}>
                {/* User info and action buttons */}
                <View style={styles.profileHeader}>
                    <View style={styles.avatarContainer}> 
                        <Image source={images[userData.profilePicture]} style={styles.avatarImage} />
                    </View>
                    <View> 
                        <Text style={styles.userName}>{userData.firstName} {userData.lastName}</Text>
                        {followStatus.status !== "true" ? 
                        <TouchableOpacity style={styles.followingButton} onPress={handleFollow}> 
                            <Text style={styles.followText}> Follow </Text>
                        </TouchableOpacity>
                        :
                        <View> 
                            <TouchableOpacity style={styles.unfollowButton} onPress={handleUnfollow}> 
                                <Text style={styles.followText}> Unfollow </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.followedButton}> 
                                <Text style={styles.followText}> Following Since {followStatus.date} </Text>
                            </TouchableOpacity>
                        </View>
                        }
                    </View>
                </View>

                {/* Stats */}
                <UserStats navigation={navigation} userStats={userStats} userInfo={userData}/>

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