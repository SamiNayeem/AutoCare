import React from "react";
import { StyleSheet, View,Text ,TouchableOpacity,ImageBackground, Image} from "react-native";




import GetStartedBtn from "../../../Components/GetStartedBtn/GetStartedBtn";

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
            <GetStartedBtn />
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
      backgroundColor: 'rgba(0, 0, 0, 0.7)', // Adjust opacity here (0.5 = 50% opacity)
    },
    containerSecond: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 80,
    },
    title: {
      fontSize: 25,
      fontWeight: 'bold',
      textAlign: 'center',
      paddingBottom: 25,
      color: '#ffff',
      padding: 40,
    },
  });
  