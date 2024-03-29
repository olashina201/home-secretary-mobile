import React, { useState } from "react";
import { StyleSheet, Image } from "react-native";
import Screen from "../components/Screen";
import * as Yup from "yup";
import {
  ErrorMessage,
  AppForm,
  AppFormField,
  SubmitButton,
} from "../components/forms";
import navigationTheme from "../navigation/navigationTheme";
import AppButton from "../components/AppButton";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});
const Login = ({ navigation }) => {

  const handleSubmit = async ({ username, password }) => {
    console.log("Submit", username, password)
  };

  return (
    <Screen style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/logo.png")}
      />
      <AppForm
        initialValues={{ username: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage
          error="Invalid username or password"
          // visible={loginFailed}
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          name="username"
          placeholder="Username"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          textContentType="passowrd"
          // secureTextEntry
        />
        <AppButton title="Login" onPress={() => navigation.navigate("Home")} />
      </AppForm>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

export default Login;
