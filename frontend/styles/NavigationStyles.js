import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    content: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    navigationBar: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      borderTopWidth: 1,
      borderTopColor: '#ccc',
      paddingBottom: 30,
      paddingTop: 10,
    },
    navButton: {
      flex: 1,
      alignItems: 'center',
    },
    navText: {
      fontSize: 16,
    },
    navIcon: {
      fontSize: 25,
    },
  });

export default styles;