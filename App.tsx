import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import GetStarted from './src/Screens/GetStarted/GetStarted';
import UserLogin from './src/Screens/UserLogin/UserLogin';
import VendorLogin from './src/Screens/VendorLogin/VendorLogin';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <GetStarted /> */}
      {/* <UserLogin /> */}
      <VendorLogin />
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
