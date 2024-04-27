import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        width: '100%',
        height: 150,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        paddingHorizontal: 10,
        marginBottom: 20,
        fontSize: 20,
    },
    postCreated: {
        backgroundColor: 'green', 
        color: 'white',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
      }
})

export default styles;