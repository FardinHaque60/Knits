import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import placeholderAvatarImage from '../assets/KnitsLogo.png';
import editIcon from '../assets/EditIcon.png';
import searchIcon from '../assets/SearchIcon.png';
import Navigation from './Navigation';
import styles from '../styles/ProfileStyles';

function ProfileScreen({ navigation }) {
    const [userData, setUserData] = useState({
        'firstName': '',
        'lastName': '',
        'bio': '',
        'profilePicture': '',
    });
    const [userStats, setUserStats] = useState({
        'posts': 0,
        'followers': 0,
        'following': 0,
    })
    const [userPosts, setUserPosts] = useState([]);

    useEffect(() => {
         /*
        axios.get('http://localhost:8080/get-user-info')
            .then(response => {
                console.log(response.data);
                setUserData(response.data);
            })
            .catch(error => {
                console.log(error.response.data);
            })
        axios.get('http://localhost:8080/get-user-stats')
            .then(response => {
                console.log(response.data);
                setUserStats(response.data);
            })
            .catch(error => {
                console.log(error.response.data);
            })
        axios.get('http://localhost:8080/get-user-posts')
            .then(response => {
                console.log(response.data);
                setUserPosts(response.data);
            })
            .catch(error => {
                console.log(error.response.data);
            })
        */
    }, []);

    //import Posts as component

    return (
        <Navigation navigation={navigation}>
            <View style={styles.container}>
                {/* User info and action buttons */}
                <View style={styles.profileHeader}>
                    <View style={styles.avatarContainer}> 
                        <Image source={placeholderAvatarImage} style={styles.avatarImage} />
                    </View>
                    <Text style={styles.userName}>{`${userData.firstName} ${userData.lastName}`}</Text>
                    <View style={styles.buttonContainer}> 
                        <TouchableOpacity style={styles.greyButton} >
                            <Image style={styles.buttonIcon} source={editIcon}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.greyButton} onPress={() => navigation.navigate("Search")}>
                            <Image style={styles.buttonIcon} source={searchIcon}/>
                        </TouchableOpacity>
                    </View>
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
                    <Post id={item.id} author={item.author} body={item.body} date={item.date} />
                    )}
                />
            </View>
        </Navigation>
    );
}

export default ProfileScreen;