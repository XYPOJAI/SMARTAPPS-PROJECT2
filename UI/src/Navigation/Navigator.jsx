import { createDrawerNavigator } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useColorMode, useColorModeValue } from "native-base";
import * as React from "react";
import { Dimensions } from "react-native";
import AppBar from "../components/AppBar";
import MyDrawer from "../components/MyDrawer";
import Create from "../screens/Create";
import Home from "./../screens/Home";
import Settings from "./../screens/Settings";
import Staff from "./../screens/Staff";
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const width = Dimensions.get("screen").width;

export default function ScreenNavigator() {
  const navigation = useNavigation();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Drawer.Navigator
      drawerContent={(props) => <MyDrawer {...props} />}
      screenOptions={{
        drawerStyle: {
          backgroundColor: useColorModeValue("#D9D9D9", "#595959"),
          // _dark: { bg: "#3b3b3b" },
          // _light: { bg: "#D9D9D9" },
          width: "50%",
          // width: width - width / 4,
          // drawerWidth: Dimensions.get("window").width,
        },
        header: (props) => (
          <AppBar colorModeToggle={toggleColorMode} {...props} />
        ),
      }}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Staff" component={Staff} />
      <Drawer.Screen name="Create" component={Create} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
}
