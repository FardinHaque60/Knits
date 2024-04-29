import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: '5%',
        paddingHorizontal: 20
    },
    searchInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 20
    },
    joinButton: {
        backgroundColor: '#007AFF',
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 20,
        marginBottom: 10,
        alignItems: 'center',
    },
    joinedButton: {
        backgroundColor: 'gray',
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 20,
        marginBottom: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
    },
    resultItem: {
        flexDirection: 'row',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        borderTopColor: '#ccc',
        borderTopWidth: 1,
    },
    picContainer: {
        borderRadius: 50,
        borderWidth: 1, 
        borderColor: 'black',
        padding: 3,
        marginRight: '5%',
    },
    profilePicture: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    searchText: {
        fontSize: 16,
    },
});

export default styles;