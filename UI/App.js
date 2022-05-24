import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import React, { useEffect } from "react";
import ScreenNavigator from "./src/Navigation/Navigator";
import { theme } from "./src/theme";
import { getProfilesAsync } from "./src/users.service";

export default function App() {
  return (
    <>
      <NavigationContainer>
        <NativeBaseProvider theme={theme} bg="red">
          <ScreenNavigator />
        </NativeBaseProvider>
      </NavigationContainer>
    </>
  );
}
