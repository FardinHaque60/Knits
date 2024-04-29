import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#ffffff',
      paddingTop: 5,
      paddingBottom: 16,
      width: '100%',
      alignItems: 'center',
  },
  profileHeader: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      paddingHorizontal: 10,
      marginTop: '2%',
      width: '100%'
  },
  avatarContainer: {
    borderRadius: 50,
    borderWidth: 1, 
    borderColor: 'black',
    padding: 3,
    marginRight: 8,
  },
  avatarImage: {
      width: 70,
      height: 70,
      borderRadius: 35,
  },
  userName: {
      fontSize: 18,
      fontWeight: '500',
  },
  handleContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignContent: 'center',
      marginLeft: '6%',
      marginTop: 25,
      marginBottom: 25,
      maxWidth: '90%',
  },
  handleText: {
      fontSize: 16,
      opacity: 0.5,
      textAlign: 'center',
  },
  driveCarButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 4,
    paddingHorizontal: '5%',
    borderRadius: 5,
    marginTop: '15%',
    alignItems: 'center',
  },
  joinedLabel: {
    backgroundColor: 'gray',
    paddingVertical: 4,
    paddingHorizontal: 5,
    borderRadius: 5,
    marginTop: '2%',
    alignItems: 'center',
  },
  joinText: {
    color: 'white',
  },

  //leave button header
  header: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignContent: 'space-between',
  },
  leaveButton: {
      backgroundColor: 'red',
      paddingHorizontal: 12,
      paddingVertical: 8,
      borderRadius: 20,
  },
  buttonText: {
      color: '#FFFFFF',
      fontSize: 16,
  },

  //car flat list styles
  carsContainer: {
    width: '90%',
  },
  carsText: {
    fontSize: 20,
    fontWeight: '500',
  }
});

export default styles;