import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import placeholderAvatarImage from '../assets/KnitsLogo.png';
import Navigation from './Navigation';

function ProfileScreen({ navigation }) {

    useEffect(() => {
         /*
        const name = axios.get('http://localhost:8080/get-user-info')
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.log(error.response.data);
            })
        */
    }, []);

    return (
        <Navigation>
            <View style={styles.container}>
                {/* User info and action buttons */}
                <View style={styles.profileHeader}>
                    <Image source={placeholderAvatarImage} style={styles.avatarImage} />
                    <Text style={styles.userName}>Daniel Ung</Text>
                </View>

                {/* Stats */}
                <View style={styles.statsContainer}>
                    <View style={styles.statBox}>
                        <Text style={styles.statNumber}>2</Text>
                        <Text style={styles.statLabel}>posts</Text>
                    </View>
                    <View style={styles.statBox}>
                        <Text style={styles.statNumber}>575</Text>
                        <Text style={styles.statLabel}>followers</Text>
                    </View>
                    <View style={styles.statBox}>
                        <Text style={styles.statNumber}>647</Text>
                        <Text style={styles.statLabel}>following</Text>
                    </View>
                </View>

                {/* User handle and website */}
                <View style={styles.handleContainer}>
                    <Text style={styles.handleText}>@sjsu comp sci 26</Text>
                    <Text style={styles.websiteText}>bento.me/danielung</Text>
                </View>

                {/* Dashboard */}
                <TouchableOpacity style={styles.dashboardBox}>
                    <Text style={styles.dashboardText}>Dashboard</Text>
                    <Text style={styles.dashboardSubText}>Audience insights, inspiration and tools.</Text>
                </TouchableOpacity>

                {/* Edit and Share Profile Buttons */}
                <View style={styles.editShareContainer}>
                    <TouchableOpacity style={styles.greyButton}>
                        <Text style={styles.greyButtonText}>Edit profile</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.greyButton}>
                        <Text style={styles.greyButtonText}>Share profile</Text>
                    </TouchableOpacity>
                </View>

                {/* Icon Buttons */}
                {/* ... Your Icon Buttons Code ... */}
            </View>
        </Navigation>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingTop: 16,
        paddingBottom: 16,
    },
    profileHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
    },
    avatarImage: {
        width: 64,
        height: 64,
        marginRight: 8,
    },
    userName: {
        fontSize: 18,
        fontWeight: '500',
    },
    notifications: {
        fontSize: 16,
        marginRight: 8,
    },
    actionButton: {
        backgroundColor: '#3366ff',
        borderRadius: 25,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    actionButtonText: {
        color: '#ffffff',
    },
    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 16,
    },
    statBox: {
        alignItems: 'center',
    },
    statNumber: {
        fontSize: 16,
        fontWeight: '500',
    },
    statLabel: {
        fontSize: 16,
        opacity: 0.5,
    },
    handleContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 16,
    },
    handleText: {
        fontSize: 16,
        opacity: 0.5,
    },
    websiteText: {
        fontSize: 16,
        opacity: 0.5,
        marginLeft: 16,
    },
    dashboardBox: {
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
        padding: 16,
        marginTop: 16,
    },
    dashboardText: {
        // Text styles
    },
    dashboardSubText: {
        opacity: 0.5,
    },
    editShareContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 16,
        paddingHorizontal: 16,
    },
    greyButton: {
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
        padding: 16,
        flex: 1, // This will make the buttons stretch to fill available space
        marginHorizontal: 8, // Add some space between the buttons
    },
    greyButtonText: {
        color: '#000000',
        textAlign: 'center',
    },
    // ... Add other styles for your icon buttons and any other components
});

export default ProfileScreen;
