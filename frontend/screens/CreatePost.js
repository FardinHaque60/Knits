import { useState } from 'react'
import { View, TextInput, Button } from "react-native";
import styles from "../styles/CreatePostStyles"
import axios from 'axios';

function CreatePost({navigation}) {
    const [postText, setPostText] = useState('');

    const handlePost = () => {
        console.log('Posted:', postText);
        axios.post("http://localhost:8080/api/create-post", postText)
            .then(response => {
                console.log(response.data);
                navigation.navigate("Feed")
            })
            .catch(error => {
                console.log(error.response.data)
            })
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="What's on your mind?"
                multiline
                value={postText}
                onChangeText={setPostText}
            />
            <Button
                title="Post"
                onPress={handlePost}
                disabled={postText.trim().length === 0}
            />
        </View>
    )
}

export default CreatePost;