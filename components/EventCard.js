import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const EventCard = ({ title, logo, board, members }) => (
  <View style={styles.container}>
    <View style={styles.body}>
      <View style={styles.innerItemWrapper}>
        <Text style={styles.innerItem_Title}>Back End Development</Text>
        <Text style={styles.innerItem_Description}>15 Members</Text>
      </View>
    </View>
  </View>
);
export default EventCard;

const fonts = {
  medium: {
    fontFamily: "sf-medium",
  },
  bold: {
    fontFamily: "sf-bold",
  },
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerLogoWrapper: {
    backgroundColor: "#fff",
    borderRadius: 100,
    padding: 10,
    marginRight: 10,
  },
  headerLogo: {
    resizeMode: "contain",
    width: 20,
    height: 20,
  },
  headerTitle: {
    ...fonts.medium,
    fontSize: 20,
    color: "#2C3550",
  },
  innerItemWrapper: {
    backgroundColor: "#FFF",
    marginTop: 10,
    padding: 30,
    paddingBottom: 60,
    borderRadius: 10,
  },
  innerItem_Title: {
    ...fonts.medium,
    fontSize: 20,
    color: "#2C3550",
  },
  innerItem_Description: {
    ...fonts.medium,
    fontSize: 18,
    marginTop: 8,
    color: "#7E8CBA",
  },
});
