import React, { useState } from "react";
import { StyleSheet, View, ScrollView, Text, TouchableOpacity, ImageBackground, Image, TextInput } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';



const GoogleBtn = () => {

  

  
return(
    <TouchableOpacity style={styles.googleLoginbtn}>
            <Image
              source={require('../../../assets/google.png')}
              style={{ width: 30, height: 30 }}
            />
          </TouchableOpacity>
);
}

export default GoogleBtn;


const styles = StyleSheet.create({
    googleLoginbtn: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#fff',
    borderRadius: 20,
    height: 40,
    marginTop: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom:15,
    width: 250,
    }
});