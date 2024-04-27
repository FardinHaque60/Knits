import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#ffffff',
      paddingTop: 5,
      paddingBottom: 16,
      width: '95%',
  },
  profileHeader: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      paddingHorizontal: 10,
      marginTop: '2%',
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
  followingButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 4,
    paddingHorizontal: '5%',
    borderRadius: 5,
    marginTop: '15%',
    alignItems: 'center',
  },
  unfollowButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 4,
    borderRadius: 5,
    marginTop: '10%',
    alignItems: 'center',
  },
  followedButton: {
    backgroundColor: 'gray',
    paddingVertical: 4,
    paddingHorizontal: 5,
    borderRadius: 5,
    marginTop: '2%',
    alignItems: 'center',
  },
  followText: {
    color: 'white',
  },
  actionButton: {
      backgroundColor: '#3366ff',
      borderRadius: 25,
      width: 50,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
  },
  actionButtonText: {
      color: '#ffffff',
  },
  statsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 25,
  },
  statBox: {
      alignItems: 'center',
  },
  statNumber: {
      fontSize: 16,
      fontWeight: '500',
  },
  statLabel: {
      fontSize: 16,
      opacity: 0.5,
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
  websiteText: {
      fontSize: 16,
      opacity: 0.5,
      marginLeft: 16,
  },
  dashboardBox: {
      backgroundColor: '#f0f0f0',
      borderRadius: 8,
      padding: 16,
      marginTop: 16,
  },
  dashboardText: {
      // Text styles
  },
  dashboardSubText: {
      opacity: 0.5,
  },
  editShareContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 16,
      paddingHorizontal: 16,
  },
  buttonContainer: {
    marginLeft: 70,
    flexDirection: 'row',
  },
  greyButton: {
      backgroundColor: '#f0f0f0',
      borderRadius: 8,
      padding: 16,
      marginHorizontal: 4, // Add some space between the buttons
  },
  buttonIcon: {
      width: 15,
      height: 15,
  },
  // ... Add other styles for your icon buttons and any other components
});

export default styles;