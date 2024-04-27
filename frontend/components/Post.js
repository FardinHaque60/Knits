import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from "../styles/FeedStyles";

const Post = ({id, author, body, date, time}) => {
    return (
      <TouchableOpacity style={styles.post}>
        <Text style={styles.postAuthor}> {author} </Text>
        <Text style={styles.postBody}> {body} </Text>
        <View style={styles.timeFooter}> 
          <Text style={styles.postDate}> {date} </Text>
          <Text style={styles.postDate}> {time} </Text>
        </View>
      </TouchableOpacity>
    );
  };

export default Post;