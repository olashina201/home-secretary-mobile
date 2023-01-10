import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import Onboarding from "./components/Onboarding";
import Home from "./screens/Home";
import * as Font from "expo-font";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import Register from "./screens/Register";
import AuthNavigator from "./navigation/AuthNavigator";
import navigationTheme from "./navigation/navigationTheme";
import AppNavigator from "./navigation/AppNavigator";

const Loading = () => {
  return (
    <View>
      <ActivityIndicator size="large" />
    </View>
  );
};

export default function App() {
  const [loading, setLoading] = useState(true);
  const [fontsLoaded, setFontLoaded] = useState(false);
  const [viewedOnboarding, setViewedOnboarding] = useState(false);

  const _loadAssetAsync = async () => {
    await Font.loadAsync({
      "sf-medium": require("./assets/Fonts/SF-Compact-Display-Medium.otf"),
      "sf-bold": require("./assets/Fonts/SF-Compact-Display-Bold.otf"),
    });

    setFontLoaded(true);
  };

  const checkOnboarding = async () => {
    try {
      const value = await AsyncStorage.getItem("@viewedOnboarding");
      if (value !== null) {
        setViewedOnboarding(true);
      }
    } catch (error) {
      console.log("Error @viewedOnboarding", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkOnboarding();
    _loadAssetAsync();
  }, []);

  return (
    // <View style={styles.container}>
    <NavigationContainer theme={navigationTheme}>
      {/* {loading ? <Loading /> : viewedOnboarding ? <AuthNavigator /> : <Onboarding />} */}
      {fontsLoaded ? <AppNavigator /> : null}

      {/* <StatusBar style="auto" /> */}
    </NavigationContainer>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
