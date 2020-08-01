import React from "react";
import { ImageBackground, StyleSheet, View, Text, Image, Platform, StatusBar } from "react-native";

function WelcomeScreen(props) {
  return (
    <ImageBackground
    style={styles.container} 
    source={require("../assets/background.jpg")}
    >
      <View style={styles.logocontainer}>
        <Image style={styles.logo} source={require("../assets/logo.png")} />
    <Text>Hello my office</Text>
    <Text>Hello my office</Text>
    <Text>Hello my office</Text>
    <Text>Hello my office</Text>
    <Text>Hello my office</Text>
    <Text>Hello my office</Text>
  </View>
      <View style={styles.loginbutton} ><Text>Login</Text></View>
      <View style={styles.registerbutton} ><Text>Register</Text></View>
    </ImageBackground>
  );
} 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    width: "100%",
    height:"100%"
    
  },
  loginbutton: {
    width: "100%",
    height: 70,
    backgroundColor: "tomato",
  },
  registerbutton: {
    width: "100%",
    height: 70,
    backgroundColor: "gold",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logocontainer: {
    alignSelf: "center",
    position: "absolute",
    top: 100,
  },
});
export default WelcomeScreen;
