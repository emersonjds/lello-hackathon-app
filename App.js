import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, LogBox } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import EnvioDocumentos from "./src/screens/EnvioDocumentos";
import MapViewer from "./src/screens/MapViewer";
import Home from "./src/screens/Home";
import Details from "./src/screens/Details";
import SplashScreen from "./src/screens/SplashScreen";
import LelloDetails from "./src/screens/LelloDetails";
import UserForm from "./src/screens/UserForm";
import HomeUser from "./src/screens/HomeUser";
import Invest from "./src/screens/Invest";
import LelloHouses from "./src/screens/LelloHouses";

const Stack = createNativeStackNavigator();

LogBox.ignoreAllLogs();

const Stacks = (
  <Stack.Navigator initialRouteName={"SplashScreen"}>
    <Stack.Screen name="LelloDetails" component={LelloDetails} />
    <Stack.Screen name="UserForm" component={UserForm} />
    <Stack.Screen name="HomeUser" component={HomeUser} />
    <Stack.Screen name="Invest" component={Invest} />
    <Stack.Screen name="LelloHouses" component={LelloHouses} />
    <Stack.Screen
      name="Home"
      component={Home}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="Details" component={Details} />
    <Stack.Screen
      name="EnvioDocumentos"
      component={EnvioDocumentos}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="MapViewer"
      component={MapViewer}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="SplashScreen"
      component={SplashScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default function App() {
  return <NavigationContainer>{Stacks}</NavigationContainer>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
