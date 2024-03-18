import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, ImageBackground, Image, TextInput } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <Text>Dashboard</Text>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});