import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Screen from "../components/Screen";

const Home = () => {
  return (
    <Screen style={styles.container}>
      <Text>Home</Text>
    </Screen>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
