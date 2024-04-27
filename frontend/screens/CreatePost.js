import { useState } from 'react'
import { View, TextInput, Button, Text } from "react-native";
import styles from "../styles/CreatePostStyles"
import axios from 'axios';

function CreatePost({navigation}) {
    const [postText, setPostText] = useState("");
    const [postCreate, setPostCreate] = useState(false);

    const handlePost = () => {
        console.log('Posted:', postText);
        axios.post("http://localhost:8080/api/create-post", postText, {headers: {'Content-Type': 'text/plain'}})
            .then(response => {
                console.log(response.data);
                setPostCreate(true);
                setPostText("");
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
            {postCreate ? <Text style={styles.postCreated}> Succesfully Created Post! </Text> : null }
            {/* add handling for message going away after some time */}
            <Button
                title="Post"
                onPress={handlePost}
                disabled={postText.trim().length === 0}
            />
        </View>
    )
}

export default CreatePost;