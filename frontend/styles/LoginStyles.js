import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    overlay: {
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    logo: {
      width: 200,
      height: 150,
      marginBottom: 50,
    },
    input: {
      width: '80%',
      height: 40,
      borderWidth: 0.8,
      borderColor: 'white',
      marginBottom: 20,
      borderRadius: 5,
      backgroundColor: '#d7dede',
      paddingHorizontal: 10,
      fontSize: 15,
    },
    loginButton: {
      width: '80%',
      height: 45,
      backgroundColor: '#0c64f2',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 3,
      marginTop: 20,
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
    },
    bottomContainer: {
      flexDirection: 'row', // Arrange children horizontally
      alignItems: 'center', // Center items vertically
      marginHorizontal: 10, // Add spacing around the "Or" text and lines
      marginVertical: 30,
    },
    horizontalLine: {
      flex: 1, // Take up remaining space
      height: 1, // Thickness of the line
      backgroundColor: '#d7dede', // Color of the line
      marginHorizontal: 10,
    },
    text: {
      fontSize: 16,
      color: '#d7dede', // Color of the "Or" text
    },
    error: {
      backgroundColor: '#f8d7da', 
      color: '#721c24',
      padding: 10,
      marginBottom: 10,
      borderRadius: 5,
    }
  });

export default styles;