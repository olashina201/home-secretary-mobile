import { StyleSheet, Pressable, View } from "react-native";
import React from "react";
import AppText from "./AppText";
import colors from "../config/colors";

const TaskCard = ({ title, category, time, onPress }) => {
  return (
    <Pressable
      style={[styles.tasksContent, styles.shadowProp]}
      onPress={onPress}
    >
      <View style={styles.tasksHeader}>
        <AppText>{title}</AppText>
        <AppText>{category}</AppText>
      </View>
      <View style={styles.tasksHeader}>
        <AppText>{time}</AppText>
        <AppText>{title}</AppText>
      </View>
    </Pressable>
  );
};

export default TaskCard;

const styles = StyleSheet.create({
  tasksContent: {
    marginTop: 10,
    display: "flex",
    padding: 15,
    color: colors.white,
    backgroundColor: colors.primary,
    borderRadius: 20,
  },
  shadowProp: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  tasksHeader: {
    display: "flex",
    color: colors.white,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
