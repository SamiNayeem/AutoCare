import React from "react";
import { StyleSheet, View,Text ,TouchableOpacity,ImageBackground, Image} from "react-native";

 import { LinearGradient } from "expo-linear-gradient";
 import { Animated } from "react-native";


 const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

const GetStarted = (props:any) => {
  const customerBtn = ()=>{
    props.navigation.navigate("User Login");

  }
  const vendorBtn =()=>{
    props.navigation.navigate("Vendor Login");
  }
    return (
      <ImageBackground source={require('../../../assets/BackgroundImage.jpg')} style={styles.background}>
        <View style={styles.overlay}>
            <Image
                source={require('../../../assets/autocare logo.png')}
                style={{ width: 120, height: 100, marginLeft: 150, marginTop: 200 }}
             />
          <View style={styles.containerSecond}>
            <Text style={styles.title}>Welcome to AutoCare</Text>
            <View style={styles.getStartedContainer}>
            <TouchableOpacity  style={styles.getStartedBtn} onPress={customerBtn}>
              <LinearGradient 
              colors={["rgba(98, 207, 244, 1)", "rgba(44, 103, 242, 1)"]}
              style = {styles.getStartedBtn}
              >
              <Text style={styles.btnText}>I am a customer</Text>
              </LinearGradient>
                {/* <Text style={styles.btnText}>I am a customer</Text> */}
            </TouchableOpacity>
            <TouchableOpacity style={styles.getStartedBtn} onPress={vendorBtn}>
            <LinearGradient 
              colors={["rgba(98, 207, 244, 1)", "rgba(44, 103, 242, 1)"]}
              style = {styles.getStartedBtn}
              >
              <Text style={styles.btnText}>I am a vendor</Text>
              </LinearGradient>
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
      backgroundColor: 'rgba(0, 0, 0, 0.8)', // Adjust opacity here (0.5 = 50% opacity)
    },
    containerSecond: {
      flex: 1,
      marginTop:30,
      paddingHorizontal: 80,
    },
    title: {
      fontSize: 25,
      fontWeight: 'bold',
      textAlign: 'center',
      paddingBottom: 10,
      color: '#ffff',
      
    },
    getStartedBtn:{
      // backgroundColor: "#ffff",
      padding: 10,
      borderRadius: 30,
      width: 250,
      marginTop: 10
  },
  btnText:{
      color: "#fff",
      textAlign: "center"
  },
  getStartedContainer: {

    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 50
  }
  });
  