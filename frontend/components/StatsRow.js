import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import styles from "../styles/ProfileStyles";

const StatsRow = ({navigation, userStats, userInfo}) => {
    const viewFollowers = () => {
        navigation.navigate("People", {id: userInfo.id, state: true}); //pass true to indicate render followers
    }

    const viewFollowing = () => {
        navigation.navigate("People", {id: userInfo.id, state: false}); //pass false to indicate render following
    }

    return (
        <View style={styles.statsContainer}>
            <View style={styles.statBox}>
                <Text style={styles.statNumber}>{userStats.posts}</Text>
                <Text style={styles.statLabel}>posts</Text>
            </View>
            <TouchableOpacity style={styles.statBox} onPress={viewFollowers}>
                <Text style={styles.statNumber}>{userStats.followers}</Text>
                <Text style={styles.statLabel}>followers</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.statBox} onPress={viewFollowing}>
                <Text style={styles.statNumber}>{userStats.following}</Text>
                <Text style={styles.statLabel}>following</Text>
            </TouchableOpacity>
        </View>
    )
}

export default StatsRow;