import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 16,
    },
    input: {
      marginBottom: 16,
      padding: 10,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 4,
    },
    editMade: {
        backgroundColor: 'green', 
        color: 'white',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
      }
  });

export default styles;