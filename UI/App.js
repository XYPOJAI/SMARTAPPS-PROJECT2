import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import React from "react";
import ScreenNavigator from "./src/Navigation/Navigator";
import { theme } from "./src/theme";

export default function App() {
  return (
    <>
      <NavigationContainer>
        <NativeBaseProvider theme={theme}>
          <ScreenNavigator />
        </NativeBaseProvider>
      </NavigationContainer>
    </>
  );
}
