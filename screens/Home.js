import {
  View,
  Text,
  Image,
  SafeAreaView,
  TextInput,
  ScrollView,
} from "react-native";
import * as Font from "expo-font";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Screen from "../components/Screen";
import AppText from "../components/AppText";
import colors from "../config/colors";
import HorizontalCalendar from "../components/HorizontalCalendar";
import TaskCard from "../components/TaskCard";
import styles from "../Style";

import Logo from "../components/Logo";
import LayoutThumb from "../components/LayoutThumb";
import Card from "../components/Card";
import HomeIcon from "../components/HomeIcon";

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
    // <Screen style={styles.container}>
    //   <View style={styles.header}>
    //     <AppText style={styles.title}>January</AppText>
    //     <MaterialCommunityIcons
    //       name="plus-circle"
    //       size={40}
    //       color={colors.primary}
    //     />
    //   </View>
    //   <View>
    //     <HorizontalCalendar
    //       selectedDate={selectedDate}
    //       setSelectedDate={setSelectedDate}
    //     />
    //   </View>
    //   <View style={styles.tasksContainer}>
    //     <View style={styles.header}>
    //       <AppText style={styles.title}>Tasks</AppText>
    //       <View style={styles.filterSection}>
    //         <AppText style={styles.title}>filter</AppText>
    //         <MaterialCommunityIcons
    //           name="filter"
    //           size={25}
    //           color={colors.medium}
    //         />
    //       </View>
    //     </View>
    //     <FlatList
    //       data={tasks}
    //       renderItem={({ item }) => (
    //         <TaskCard
    //           title={item.title}
    //           category={item.category}
    //           time={item.time}
    //           onPress={() => console.log(item)}
    //         />
    //       )}
    //       keyExtractor={(item) => item.id.toString()}
    //     />
    //   </View>
    // </Screen>
    <Screen>
      <ScrollView>
        <View style={styles.headerWrapper}>
          <View style={styles.headerTop}>
            <Logo />
            <Image source={require("../assets/plus-button.png")} />
          </View>
          <View style={styles.headerBottom}>
            <View style={styles.header_BottomTitleWrap}>
              <Text style={styles.header_bottomTitle}>Boards</Text>
              <View style={styles.header_ChooseLayout}>
                <LayoutThumb.style1 />
                <View style={styles.header_ChooseLayout_divider} />
                <LayoutThumb.style2 />
              </View>
            </View>
          </View>
          <View style={styles.header_SearchWrapper}>
            <MaterialIcons name="search" size={24} color="#7E8CBA" />
            <TextInput
              placeholder="Search cards..."
              style={styles.header_SearchInput}
              placeholderTextColor="#8E9AC3"
            />
          </View>
          <View style={styles.header_NavigationWrapper}>
            <Text style={[styles.header_NavItem, styles.header_NavItemActive]}>
              All Boards
            </Text>
            <Text style={styles.header_NavItem}>Teams</Text>
            <Text style={styles.header_NavItem}>Personal</Text>
          </View>
        </View>
        <View style={styles.mainBottom}>
          <Card
            title="Google"
            logo={require("../assets/Img/Google_logo.png")}
          />
          <Card
            title="Facebook"
            logo={require("../assets/Img/Facebook_logo.png")}
          />
        </View>
      </ScrollView>
    </Screen>
  );
};

export default Home;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: colors.white,
//     padding: 15,
//   },
//   header: {
//     display: "flex",
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//   },
//   title: {
//     fontSize: 25,
//     fontWeight: "bold",
//     color: colors.primary,
//   },
//   tasksContainer: {
//     marginTop: 10,
//     display: "flex",
//   },
//   filterSection: {
//     display: "flex",
//     flexDirection: "row",
//     alignItems: "center",
//   },
// });
