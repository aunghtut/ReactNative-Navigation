import React, { Component } from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import Header from "../Header/Header";
import FlatListDemo from "../FlatList/FlatListDemo";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Header title="Home" navigation={navigation} />
      <View style={styles.context}>
        <Text style={styles.text}>日本語能力試験</Text>
        <FlatListDemo></FlatListDemo>
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
