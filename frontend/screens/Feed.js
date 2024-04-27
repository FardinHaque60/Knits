import React, { useState, useEffect} from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import styles from "../styles/FeedStyles";
import Post from "../components/Post";
import Navigation from "../components/Navigation";
import axios from 'axios';
import images from "../components/Images";

function Feed({navigation}) {
  const [posts, setPosts] = useState([
    {'id': 4, 'author': 'Knits', 'body': 'Welcome to Knits', 'date': '2024-04-19', 'time': '...'},
    {'id': 5, 'author': 'Knits', 'body': 'Welcome to Knits', 'date': '2024-04-19', 'time': '...'},
    {'id': 6, 'author': 'Knits', 'body': 'Welcome to Knits', 'date': '2024-04-19', 'time': '...'},
    {'id': 7, 'author': 'Knits', 'body': 'Welcome to Knits', 'date': '2024-04-19', 'time': '...'},
    {'id': 8, 'author': 'Knits', 'body': 'Welcome to Knits', 'date': '2024-04-19', 'time': '...'},
    {'id': 9, 'author': 'Knits', 'body': 'Welcome to Knits', 'date': '2024-04-19', 'time': '...'},
  ])

  const [recommendations, setRecommendations] = useState([]);

  const [userInfo, setUserInfo] = useState({})

  useEffect(() => {
    axios.get('http://localhost:8080/api/get-user-info', {params: {id: -1}})
      .then(response => {
        console.log(response.data);
        setUserInfo(response.data);
      })
      .catch(error => {
        console.log(error.response.data);
      });
    axios.get('http://localhost:8080/api/get-recommendations')
      .then(response => {
        console.log(response.data);
        setRecommendations(response.data);
      })
      .catch(error => {
        console.log(error.response.data);
      });
    /*
    axios.get('http://localhost:8080/api/get-feed-posts')
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      }); */
  }, []);

  const Recommendations = ({id, picture, firstName, lastName}) => {
    return (
      <TouchableOpacity style={styles.reccObj} onPress={() => navigation.navigate("View Profile", id)}> 
        <View style={styles.picContainer}>
          <Image source={images[picture]} style={styles.reccPic} /> 
        </View>
        <View style={styles.reccName}>
          <Text> {firstName} {lastName} </Text> 
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <Navigation navigation={navigation} >
      <View style={styles.container}>
        <View style={styles.headerRow}> 
          <Text style={styles.header}> Welcome, {userInfo.firstName} {userInfo.lastName} </Text>
          <TouchableOpacity style={styles.postButton} onPress={() => navigation.navigate('Create Post')}>
            <Text style={styles.buttonText}>+ Post</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.reccText}> People you may know: </Text>
          <FlatList
            data={recommendations}
            keyExtractor={(item) => item.id}
            horizontal={true}
            contentContainerStyle={styles.hScrollViewContent}
            renderItem={({ item }) => (
              <Recommendations id={item.id} picture={item.profilePicture} firstName={item.firstName} lastName={item.lastName} />
            )}
          />
        <FlatList
          data={posts}
          keyExtractor={(item) => item.id}
          contentContainerStyle = {styles.scrollView}
          renderItem={({ item }) => (
            <Post author={item.author} body={item.body} date={item.date} time={item.time}/>
          )}
        />
      </View>
    </Navigation>
  );
}

export default Feed;