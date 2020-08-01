import React from 'react';
import { View ,StyleSheet, Text} from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';

export default function App() {
  return (
    
    <WelcomeScreen>
      <View style={styles.left}>

      </View>

    </WelcomeScreen>
  );
}

const styles = StyleSheet.create({
  left:{
    width:200,
    height:200,
    backgroundColor:"black",
    position:"absolute",
  }
})
