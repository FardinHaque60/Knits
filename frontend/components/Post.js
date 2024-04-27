import React from 'react';
import { View, Text } from 'react-native';
import styles from "../styles/FeedStyles";

const Post = ({author, body, date, time}) => {
    return (
      <View style={styles.post}>
        <Text style={styles.postAuthor}> {author} </Text>
        <Text style={styles.postBody}> {body} </Text>
        <View style={styles.timeFooter}> 
          <Text style={styles.postDate}> {date} </Text>
          <Text style={styles.postDate}> {time} </Text>
        </View>
      </View>
    );
  };

export default Post;