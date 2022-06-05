import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider, StatusBar } from "native-base";
import React from "react";
import ScreenNavigator from "./src/Navigation/Navigator";
import { theme } from "./src/theme";

export default function App() {
  console.log("App started");
  // console.log(StatusBar.currentHeight);
  return (
    <NavigationContainer>
      <NativeBaseProvider theme={theme}>
        {/* <StatusBar barStyle="light-content" /> */}
        <ScreenNavigator />
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
