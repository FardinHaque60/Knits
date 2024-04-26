import React, { useState, useEffect} from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import styles from "../styles/FeedStyles";
import Navigation from "../components/Navigation";
import axios from 'axios';

function Feed({navigation}) {
  const [posts, setPosts] = useState([
    {'id': 4, 'author': 'Knits', 'body': 'Welcome to Knits', 'date': '2024-04-19'},
    {'id': 5, 'author': 'Knits', 'body': 'Welcome to Knits', 'date': '2024-04-19'},
    {'id': 6, 'author': 'Knits', 'body': 'Welcome to Knits', 'date': '2024-04-19'},
    {'id': 7, 'author': 'Knits', 'body': 'Welcome to Knits', 'date': '2024-04-19'},
    {'id': 8, 'author': 'Knits', 'body': 'Welcome to Knits', 'date': '2024-04-19'},
    {'id': 9, 'author': 'Knits', 'body': 'Welcome to Knits', 'date': '2024-04-19'},
  ])

  const [recommendations, setRecommendations] = useState([
    {'id': 1, 'profilePicture': require('../assets/profile_pictures/Dlo.png'), 'firstName': 'Dangelo', 'lastName': 'Russell'},
    {'id': 2, 'profilePicture': require('../assets/profile_pictures/Austin_Reaves.png'), 'firstName': 'Austin', 'lastName': 'Reaves'},
    {'id': 3, 'profilePicture': require('../assets/profile_pictures/Jordan_Poole.png'), 'firstName': 'Jordan', 'lastName': 'Poole'},
    {'id': 5, 'profilePicture': require('../assets/profile_pictures/Nas_Reed.png'), 'firstName': 'Nas', 'lastName': 'Reed'},
    {'id': 4, 'profilePicture': require('../assets/profile_pictures/Gary_Payton.png'), 'firstName': 'Gary', 'lastName': 'Payton'},
    {'id': 6, 'profilePicture': require('../assets/KnitsLogo.png'), 'firstName': 'Knits', 'lastName': ''},
  ]);

  const [userInfo, setUserInfo] = useState({
    'profilePicture': '',
    'firstName': '',
    'lastName': '',
    'email': '',
  })

  useEffect(() => {
    axios.get('http://localhost:8080/api/get-user-info')
      .then(response => {
        console.log(response.data);
        setUserInfo({...userInfo, ...response.data});
      })
      .catch(error => {
        console.log(error.response.data);
      });
    /*
    axios.get('http://localhost:8080/api/get-posts')
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      }); */
  }, []);

  const Post = ({author, body, date}) => {
    return (
      <View style={styles.post}>
        <Text style={styles.postAuthor}> {author} </Text>
        <Text style={styles.postBody}> {body} </Text>
        <Text style={styles.postDate}> {date} </Text>
      </View>
    );
  };

  const Recommendations = ({id, picture, firstName, lastName}) => {
    return (
      <TouchableOpacity style={styles.reccObj} onPress={() => navigation.navigate("View Profile", {id: id})}> 
        <View style={styles.picContainer}>
          <Image source={picture} style={styles.reccPic} /> 
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
            keyExtractor={(item) => item.id.toString()}
            horizontal={true}
            contentContainerStyle={styles.hScrollViewContent}
            renderItem={({ item }) => (
              <Recommendations id={item.id} picture={item.profilePicture} firstName={item.firstName} lastName={item.lastName} />
            )}
          />
        <FlatList
          data={posts}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle = {styles.scrollView}
          renderItem={({ item }) => (
            <Post author={item.author} body={item.body} date={item.date} />
          )}
        />
      </View>
    </Navigation>
  );
}

export default Feed;