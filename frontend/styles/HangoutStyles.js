import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      width: '100%',
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
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
    hangoutText: {
        color: 'black',
        fontSize: 16,
    },
    joinHangout: {
        backgroundColor: '#98b9ed',
        paddingHorizontal: 30,
        paddingVertical: 8,
        borderRadius: 20,
    },
    hostedHangout: {
        backgroundColor: '#edc598',
        paddingHorizontal: 30,
        paddingVertical: 8,
        borderRadius: 20,
    },
  });

export default styles;