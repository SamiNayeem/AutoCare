import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import GetStarted from './src/Screens/GetStarted/GetStarted';
import UserLogin from './src/Screens/UserLogin/UserLogin';


export default function App() {
  return (
    <View style={styles.container}>
      {/* <GetStarted /> */}
      <UserLogin />
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
