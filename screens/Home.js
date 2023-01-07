import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Screen from "../components/Screen";
import AppText from "../components/AppText";
import colors from "../config/colors";
import HorizontalCalendar from "../components/HorizontalCalendar";

const Home = () => {
  const [selectedDate, setSelectedDate] = React.useState(new Date());
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
      <View>
        <HorizontalCalendar
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      </View>
      <View style={styles.tasksConatiner}>
        <View style={styles.header}>
          <AppText style={styles.title}>Tasks</AppText>
          <View style={styles.filterSection}>
            <AppText style={styles.title}>filter</AppText>
            <MaterialCommunityIcons
              name="filter"
              size={25}
              color={colors.medium}
            />
          </View>
        </View>
      </View>
    </Screen>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
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
  },
  tasksConatiner: {
    marginTop: 10,
    display: "flex",
  },
  filterSection: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  }
});
