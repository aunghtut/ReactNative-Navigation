import React from "react";
import { View, StyleSheet, ScrollView, Text, Button } from "react-native";
import Header from "../Header/Header";

export default function Contact({ navigation }) {
  return (
    <View style={styles.container}>
      <Header title="Contact" navigation={navigation} />
      <View style={styles.context}>
        <Text style={styles.text}>Contact is Here</Text>
        <Button title="Go Back" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  context: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#03cafc",
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "800",
  },
});
