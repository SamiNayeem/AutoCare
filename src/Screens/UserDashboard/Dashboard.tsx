import React, { useState } from "react";
import { StyleSheet, View, ScrollView, Text, TouchableOpacity, ImageBackground, Image, TextInput, FlatList } from "react-native";

import { MaterialCommunityIcons } from '@expo/vector-icons';
import Services from "../../Components/ServiceTable/Services";
import { Paragraph } from "react-native-paper";

import { SelectList } from 'react-native-dropdown-select-list'


const Dashboard = () => {
  const [showServices, setShowServices] = useState(false);

  const handleSave = () => {
    setShowServices(true);
  };

  const [selected, setSelected] = React.useState("");

  const cars = [
    {key:'1',value:'Lamborghini'},
    {key:'2',value:'Audi'},
    {key:'3',value:'Ferrari'},
    {key:'4',value:'Toyota'},
  ];

  
  
  return (
    <ImageBackground source={require('../../../assets/bgimage.jpg')} style={styles.background}>
      <ScrollView style={styles.overlay}>
        <Image
          source={require('../../../assets/autocare logo.png')}
          style={{ width: 80, height: 80, marginLeft: 150, }}
        />
        <Text style={styles.title}>AutoCare Dashboard</Text>
        <View>
          <Text style={styles.paragraph}>Enter your Car Model: </Text>
          <View style={styles.topContainer}>
            <View style={styles.textInput}>
            <SelectList 
      // onSelect={() => alert(selected)}
      setSelected={setSelected} 
      fontFamily='sans-serif'
      data={cars}  
      // arrowicon={<FontAwesome name="chevron-down" size={12} color={'black'} />} 
      // searchicon={<FontAwesome name="search" size={12} color={'black'} />} 
      search={true} 
      
      placeholder="Select a car"  //default selected option
    />
            </View>
            <TouchableOpacity style={styles.btn} onPress={handleSave}><Text>Proceed</Text></TouchableOpacity>
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
    paddingTop: 20,
    paddingLeft: 5,
    
    
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
    marginTop: 40,
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
    width: 80,
    height:40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginLeft: 10,
    marginTop: 7,

  },

  textInput:{
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 0,
    width: 270,
    marginTop: 5
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