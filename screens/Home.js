import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Screen from "../components/Screen";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import colors from "../config/colors";

const Home = () => {
  return (
    <Screen style={styles.container}>
      <View style={styles.header}>
        <AppText style={styles.title}>Schedule</AppText>
        <MaterialCommunityIcons
          name="plus-circle"
          size={50}
          color={colors.primary}
        />
      </View>
    </Screen>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: colors.primary,
  }
});
