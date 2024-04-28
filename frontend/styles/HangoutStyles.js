import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
    headerContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      marginBottom: 16,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    newChatButton: {
      backgroundColor: '#007AFF',
      paddingHorizontal: 12,
      paddingVertical: 8,
      borderRadius: 20,
    },
    newChatButtonText: {
      color: '#FFFFFF',
      fontSize: 16,
    },
    scrollViewContent: {
      paddingBottom: 16,
    },
  });

export default styles;