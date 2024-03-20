import React from "react";
import { StyleSheet, View,Text ,TouchableOpacity,ImageBackground, Image} from "react-native";


const GetStarted = () => {
    return (
      <ImageBackground source={require('../../../assets/BackgroundImage.jpg')} style={styles.background}>
        <View style={styles.overlay}>
            <Image
                source={require('../../../assets/autocare logo.png')}
                style={{ width: 200, height: 100, marginLeft: 120, marginTop: 100 }}
             />
          <View style={styles.containerSecond}>
            <Text style={styles.title}>Welcome to AutoCare</Text>
            <View style={styles.getStartedContainer}>
            <TouchableOpacity style={styles.getStartedBtn}>
                <Text style={styles.btnText}>I am a customer</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.getStartedBtn}>
                <Text style={styles.btnText}>I am a vendor</Text>
            </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  };

  export default GetStarted;
  
  const styles = StyleSheet.create({
    background: {
      flex: 1,
      resizeMode: 'cover',
    },
    overlay: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust opacity here (0.5 = 50% opacity)
    },
    containerSecond: {
      flex: 1,
      marginTop:80,
      paddingHorizontal: 80,
    },
    title: {
      fontSize: 25,
      fontWeight: 'bold',
      textAlign: 'center',
      paddingBottom: 25,
      color: '#ffff',
      // padding: 40,
    },
    getStartedBtn:{
      backgroundColor: "#ffff",
      padding: 10,
      borderRadius: 10,
      width: 250,
      marginTop: 60
  },
  btnText:{
      color: "#000",
      textAlign: "center"
  },
  getStartedContainer: {

    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 100
  }
  });
  