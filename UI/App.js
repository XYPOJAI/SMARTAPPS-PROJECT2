import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import React from "react";
import ScreenNavigator from "./src/Navigation/ScreenNavigator";

const config = {
  strictMode: "error",
};

export default function App() {
  return (
    <>
      <NavigationContainer>
        <NativeBaseProvider config={config}>
          <ScreenNavigator />
        </NativeBaseProvider>
      </NavigationContainer>
    </>
  );
}
