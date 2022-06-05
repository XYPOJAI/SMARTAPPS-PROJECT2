import { createDrawerNavigator } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Constants from "expo-constants";
import { useColorMode, useColorModeValue } from "native-base";
import * as React from "react";
import { Dimensions } from "react-native";
import AppBar from "../components/AppBar";
import MyDrawer from "../components/MyDrawer";
import Create from "../screens/Create";
import Details from "../screens/Details";
import Edit from "../screens/Edit";
import Home from "./../screens/Home";
import Settings from "./../screens/Settings";
import Staff from "./../screens/Staff";
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const width = Dimensions.get("screen").width;

export default function ScreenNavigator() {
  const navigation = useNavigation();
  const { colorMode, toggleColorMode } = useColorMode();
  console.log("Navigation");
  console.log(Constants.statusBarHeight);

  return (
    <Drawer.Navigator
      backBehavior="history"
      drawerContent={(props) => <MyDrawer {...props} />}
      screenOptions={{
        drawerStyle: {
          backgroundColor: useColorModeValue("#D9D9D9", "#595959"),
        },
        // headerStyle: {
        //   // marginTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight,
        //   marginTop: 100,
        // },
        header: (props) => (
          <AppBar colorModeToggle={toggleColorMode} {...props} />
        ),
        // headerMode: "screen",
        // headerShown: false,
      }}
      defaultStatus="closed"
      useLegacyImplementation="true"
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Staff" component={Staff} />
      <Drawer.Screen name="Details" component={Details} />
      <Drawer.Screen name="Edit" component={Edit} />
      <Drawer.Screen name="Create" component={Create} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
}
