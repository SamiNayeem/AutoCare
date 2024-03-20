import React, { useState } from "react";
import { StyleSheet, View, ScrollView, Text, TouchableOpacity, ImageBackground, Image, TextInput, FlatList } from "react-native";

import { MaterialCommunityIcons } from '@expo/vector-icons';
import Services from "../../Components/ServiceTable/Services";
import { Paragraph } from "react-native-paper";

const Dashboard = () => {
  const [showServices, setShowServices] = useState(false);

  const handleSave = () => {
    setShowServices(true);
  };

  return (
    <ImageBackground source={require('../../../assets/bgimage.jpg')} style={styles.background}>
      <ScrollView style={styles.overlay}>
        <Image
          source={require('../../../assets/autocare logo.png')}
          style={{ width: 100, height: 100, marginLeft: 150, }}
        />
        <Text style={styles.title}>AutoCare Dashboard</Text>
        <View>
          <Text style={styles.paragraph}>Enter your Car Model: </Text>
          <View style={styles.topContainer}>
            <View style={styles.textInput}>
              <TextInput
                placeholder="Enter your car model"
                maxLength={25}
              />
            </View>
            <TouchableOpacity style={styles.btn} onPress={handleSave}><Text>Save</Text></TouchableOpacity>
          </View>
        </View>
        {showServices && (
          <View style={styles.servicesView}>
            <Services />
          </View>
        )}
      </ScrollView>
    </ImageBackground>
  );
};

export default Dashboard;



const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5', // Adjust opacity here (0.5 = 50% opacity)
    height: '100%',
    width: '100%',
    paddingTop: 60,
    paddingLeft: 10,
    
    
  },
  
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: 25,
    color: '#ffff',
    fontStyle: 'italic',
    
  },

  pointContainer: {
    backgroundColor: '#ffff',
    padding: 10,
    borderRadius: 10,
    width: 250,
    height: 100,
    marginTop: 60,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  
  pointText: {
    textAlign: 'center',
    color: '#000',
    fontSize: 19,
  },

  bold:{
    fontWeight: 'bold',
  },

  services:{
    fontSize:15,
    color: '#ffff',
    
  },

  paragraph:{
    color:'#fff',
    fontSize:15,
  },

  btn:{
    backgroundColor: '#3DBDFF',
    width: 70,
    height:40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginLeft: 10,

  },

  textInput:{
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 5,
    width: 270,
  },

  topContainer:{
    flex: 1,
    flexDirection: 'row',
    alignContent: 'center'
  },

  servicesView:{
    marginTop: 40
  }

  
  

});