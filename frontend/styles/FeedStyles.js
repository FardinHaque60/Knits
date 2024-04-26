import { HttpStatusCode } from "axios";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    //header styles
    container: {
        flex: 1,
        width: '96%',
    },
    header: {
      marginTop: 10,
      fontSize: 24,
      fontWeight: 'bold',
      marginLeft: -10,
    },
    headerRow: {
      flexDirection: 'row',
      alignItems: 'left',
      justifyContent: 'space-between', 
      paddingHorizontal: 10,
      marginBottom: 10,
    },
    postButton: {
      backgroundColor: '#007AFF',
      paddingVertical: 8,
      paddingHorizontal: 10,
      borderRadius: 5,
      marginTop: 10,
    },
    buttonText: {
      color: '#fff', // Button text color
      fontWeight: 'bold',
    },
    logoutButton: {
      marginRight: 20,
    },
    logoutIcon: {
      width: 25,
      height: 25,
    },

    //recommendation bar styles
    hScrollViewContent: {
      flexDirection: 'row',
      marginBottom: 15,
      paddingVertical: 15,
    },
    reccObj: {
      borderWidth: 0, 
      borderColor: 'black',
      borderRadius: 5, 
      marginRight: 10,
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 10,
    },
    picContainer: {
      borderRadius: 50,
      borderWidth: 1, 
      borderColor: 'black',
      padding: 3,
      marginBottom: 5,
    },
    reccPic: {
      width: 50,
      height: 50,
      borderRadius: 25,
    },
    reccText: {
      marginBottom: 5,
      fontSize: 18,
    },
    reccName: {
      flexDirection: 'row',
    },

    //post list styles
    post: {
      backgroundColor: '#d3d8db',
      padding: 10,
      minWidth: '100%',
      minHeight: 150,
      marginBottom: 10,
      borderRadius: 5,
      flexDirection: 'column',
    },
    postAuthor: {
      fontWeight: 'bold',
      fontSize: 20,
      marginBottom: 5,
    },
    postBody: {
      marginTop: 10,
      fontSize: 15,
    },
    postDate: {
      fontStyle: 'italic',
      marginTop: 'auto',
    }
  });

export default styles;