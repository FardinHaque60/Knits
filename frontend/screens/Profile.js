import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import editIcon from '../assets/EditIcon.png';
import searchIcon from '../assets/SearchIcon.png';
import Navigation from '../components/Navigation';
import Post from "../components/Post";
import styles from '../styles/ProfileStyles';
import axios from 'axios';
import images from "../components/Images";
import UserStats from "../components/StatsRow";

function ProfileScreen({ navigation }) {
    const [userData, setUserData] = useState({});
    const [userStats, setUserStats] = useState({
        'posts': 0,
        'followers': 0,
        'following': 0,
    })
    const [userPosts, setUserPosts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/get-user-info', {params: {id: -1}}) //negative one is passed to reprsent current user
            .then(response => {
                console.log(response.data);
                setUserData(response.data);
            })
            .catch(error => {
                console.log(error.response.data);
            })
        axios.get('http://localhost:8080/api/get-user-stats', {params: {id:  -1}})
            .then(response => {
                console.log(response.data);
                setUserStats(response.data);
            })
            .catch(error => {
                console.log(error.response.data);
            })
        axios.get('http://localhost:8080/api/get-user-posts', {params: {id: -1}})
            .then(response => {
                console.log(response.data);
                setUserPosts(response.data);
            })
            .catch(error => {
                console.log(error.response.data);
            })
    }, []);

    return (
        <Navigation navigation={navigation}>
            <View style={styles.container}>
                {/* User info and action buttons */}
                <View style={styles.profileHeader}>
                    <View style={styles.avatarContainer}> 
                        <Image source={images[userData.profilePicture]} style={styles.avatarImage} />
                    </View>
                    <Text style={styles.userName}>{`${userData.firstName} ${userData.lastName}`}</Text>
                    <View style={styles.buttonContainer}> 
                        <TouchableOpacity style={styles.greyButton} onPress={() => navigation.navigate("Edit Profile")}>
                            <Image style={styles.buttonIcon} source={editIcon} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.greyButton} onPress={() => navigation.navigate("Search")}>
                            <Image style={styles.buttonIcon} source={searchIcon}/>
                        </TouchableOpacity>
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

export default ProfileScreen;