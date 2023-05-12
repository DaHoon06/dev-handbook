import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Router} from "./src/router";

export default function App() {


  return (

      <Router />
  // <View style={styles.container}>
  //     <StatusBar style="auto" />
  //     <Text>Open up App.tsx to start working on your app!</Text>
  //
  //   </View>
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
