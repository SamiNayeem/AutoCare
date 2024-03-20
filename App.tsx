import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import GetStarted from './src/Screens/GetStarted/GetStarted';
import UserLogin from './src/Screens/UserLogin/UserLogin';
import VendorLogin from './src/Screens/VendorLogin/VendorLogin';
import UserRegistration from './src/Screens/UserRegistration/UserRegistration';
import VendorRegistration from './src/Screens/VendorRegistration/VendorRegistration';
import Dashboard from './src/Screens/UserDashboard/Dashboard';




export default function App() {
  return (
    <View style={styles.container}>
      {/* <GetStarted /> */}
      {/* <UserLogin /> */}
      {/* <VendorLogin /> */}
      {/* <UserRegistration /> */}
      {/* <VendorRegistration/> */}
      <Dashboard />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});
