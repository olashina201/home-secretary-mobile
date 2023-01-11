import { View, Text, Image, TextInput, FlatList } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import Screen from "../components/Screen";
import TaskCard from "../components/TaskCard";
import styles from "../Style";

import Logo from "../components/Logo";
import LayoutThumb from "../components/LayoutThumb";
import Card from "../components/Card";
import EventCard from "../components/EventCard";

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

const routes = [
  {
    id: 1,
    title: "Boards",
  },
  {
    id: 2,
    title: "Tasks",
  },
  {
    id: 3,
    title: "Events",
  },
];

const boards = [
  {
    id: 1,
    title: "Board 1",
    description: "Lorem ipsum dolor sit amet, consectetur adip",
    board: "House Chores",
    members: 20,
  },
  {
    id: 2,
    title: "Board 1",
    description: "Lorem ipsum dolor sit amet, consectetur adip",
    board: "House Chores",
    members: 20,
  },
  {
    id: 3,
    title: "Board 1",
    description: "Lorem ipsum dolor sit amet, consectetur adip",
    board: "House Chores",
    members: 20,
  },
];
const Home = () => {
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const [currentRoute, setCurrentRoute] = React.useState("Boards");

  const renderRoute = (index) => {
    switch (index) {
      case "Boards":
        return (
          <FlatList
            data={tasks}
            renderItem={({ item }) => (
              <Card
                title={item.title}
                logo={require("../assets/Img/Google_logo.png")}
              />
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        );
        break;
      case "Tasks":
        return (
          <FlatList
            data={tasks}
            renderItem={({ item }) => (
              <TaskCard
                title={item.title}
                logo={require("../assets/Img/Google_logo.png")}
              />
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        );
        break;
      case "Events":
        return (
          <FlatList
            data={tasks}
            renderItem={({ item }) => (
              <EventCard
                title={item.title}
                logo={require("../assets/Img/Google_logo.png")}
              />
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        );
        break;
      default:
        break;
    }
  };
  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.headerWrapper}>
          <View style={styles.headerTop}>
            <Logo />
            <Image source={require("../assets/plus-button.png")} />
          </View>
          <View style={styles.headerBottom}>
            <View style={styles.header_BottomTitleWrap}>
              <Text style={styles.header_bottomTitle}>{currentRoute}</Text>
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
            {routes.map((route) => (
              <Text
                key={route.id}
                style={[
                  styles.header_NavItem,
                  route.title === currentRoute
                    ? styles.header_NavItemActive
                    : null,
                ]}
                onPress={() => setCurrentRoute(route.title)}
              >
                {route.title}
              </Text>
            ))}
          </View>
        </View>
        {renderRoute(currentRoute)}
      </View>
    </Screen>
  );
};

export default Home;
