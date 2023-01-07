import { StyleSheet, View, FlatList } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Screen from "../components/Screen";
import AppText from "../components/AppText";
import colors from "../config/colors";
import HorizontalCalendar from "../components/HorizontalCalendar";
import TaskCard from "../components/TaskCard";

const tasks = [
  {
    id: 1,
    title: "Task 1",
    description: "Lorem ipsum dolor sit amet, consectetur adip",
    category: "appointment",
    start: new Date("2020-01-01"),
    end: new Date("2020-01-02"),
    time: "7:00am",
  },
  {
    id: 2,
    title: "Task 1",
    description: "Lorem ipsum dolor sit amet, consectetur adip",
    category: "appointment",
    start: new Date("2020-01-01"),
    end: new Date("2020-01-02"),
    time: "7:00am",
  },
  {
    id: 3,
    title: "Task 1",
    description: "Lorem ipsum dolor sit amet, consectetur adip",
    category: "appointment",
    start: new Date("2020-01-01"),
    end: new Date("2020-01-02"),
    time: "7:00am",
  },
  {
    id: 4,
    title: "Task 1",
    description: "Lorem ipsum dolor sit amet, consectetur adip",
    category: "appointment",
    start: new Date("2020-01-01"),
    end: new Date("2020-01-02"),
    time: "7:00am",
  },
  {
    id: 5,
    title: "Task 1",
    description: "Lorem ipsum dolor sit amet, consectetur adip",
    category: "appointment",
    start: new Date("2020-01-01"),
    end: new Date("2020-01-02"),
    time: "7:00am",
  },
  {
    id: 6,
    title: "Task 1",
    description: "Lorem ipsum dolor sit amet, consectetur adip",
    category: "appointment",
    start: new Date("2020-01-01"),
    end: new Date("2020-01-02"),
    time: "7:00am",
  },
  {
    id: 7,
    title: "Task 1",
    description: "Lorem ipsum dolor sit amet, consectetur adip",
    category: "appointment",
    start: new Date("2020-01-01"),
    end: new Date("2020-01-02"),
    time: "7:00am",
  },
];
const Home = () => {
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  return (
    <Screen style={styles.container}>
      <View style={styles.header}>
        <AppText style={styles.title}>January</AppText>
        <MaterialCommunityIcons
          name="plus-circle"
          size={40}
          color={colors.primary}
        />
      </View>
      <View>
        <HorizontalCalendar
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      </View>
      <View style={styles.tasksContainer}>
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
        <FlatList
          data={tasks}
          renderItem={({ item }) => (
            <TaskCard
              title={item.title}
              category={item.category}
              time={item.time}
              onPress={() => console.log(item)}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </Screen>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 15,
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
  tasksContainer: {
    marginTop: 10,
    display: "flex",
  },
  filterSection: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});
