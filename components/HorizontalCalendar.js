import React, { useMemo } from "react";
import {
  View,
  FlatList,
  Dimensions,
  StyleSheet,
  Text,
  Pressable,
} from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

const { width } = Dimensions.get("window");
const ITEM_WIDTH = width * 0.15;
const ITEM_HEIGHT = 90;
const ITEM_OFFSET = ITEM_WIDTH + 18;

function dateSubtractDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() - days);
  return result;
}

function getDayString(date) {
  return date.toString().split(" ")[0];
}

function isSameDay(date1, date2) {
  return date1.getDate() === date2.getDate();
}

function isToday(date) {
  return new Date().getDate() == date.getDate();
}

function generateHorizontalCalendarDates(days) {
  const today = new Date();
  let result = [];
  for (let i = 0; i < days; i++) {
    result[i] = dateSubtractDays(today, i);
  }

  return result.reverse();
}

export default function HorizontalCalendar({ selectedDate, setSelectedDate }) {
  const dates = useMemo(() => {
    return generateHorizontalCalendarDates(14);
  }, []);

  const onDatePress = (date) => {
    setSelectedDate(date);
    console.log("DATE", date);
  };

  const DateHeaderComponent = () => (
    <View>
      <AppText>December</AppText>
    </View>
  );
  const renderItem = ({ item, index }) => {
    const dayNumber = item.getDate();
    const dayString = getDayString(item);
    const isActive = isSameDay(selectedDate, item);
    return (
      <Pressable
        onPress={() => onDatePress(item)}
        style={[styles.item, isActive && { backgroundColor: colors.primary }]}
      >
        <Text style={[styles.dateOutput, isActive && styles.activeText]}>
          {dayNumber}
        </Text>
        <Text style={[styles.dayStyle, isActive && styles.activeText]}>
          {isToday(item) ? "today" : dayString}
        </Text>
      </Pressable>
    );
  };

  return (
    <FlatList
      data={dates}
      style={styles.flatlist}
    //   ListHeaderComponent={DateHeaderComponent}
    //   stickyHeaderIndices={[0]}
    //   stickyHeaderHiddenOnScroll={false}
      renderItem={renderItem}
      keyExtractor={(item) => item.toDateString()}
      horizontal={true}
        // contentContainerStyle={[
        //   { paddingBottom: 16, paddingLeft: 4, paddingRight: 16},
        // ]}
        // ListHeaderComponentStyle={[
        //   { flexDirection: 'column'}
        // ]}
      showsHorizontalScrollIndicator={false}
      initialScrollIndex={dates.length - 8}
      getItemLayout={(_, index) => ({
        length: ITEM_WIDTH,
        offset: ITEM_OFFSET * index,
        index,
      })}
    />
  );
}

const styles = StyleSheet.create({
  dateOutput: {
    color: colors.black,
    fontSize: 20,
    fontWeight: "400",
  },
  dayStyle: {
    color: colors.danger,
    textTransform: "uppercase",
  },
  activeText: {
    color: colors.white,
  },
  item: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
    marginTop: 8,
    backgroundColor: colors.light,
  },
});
