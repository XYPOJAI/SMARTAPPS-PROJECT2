import { createDrawerNavigator } from "@react-navigation/drawer";
import { Box, Center, Text } from "native-base";
import * as React from "react";
import MyDrawer from "../components/MyDrawer";
import Home from "./../screens/Home";

const Drawer = createDrawerNavigator();
function Component(props) {
  return (
    <Center>
      <Text mt="12" fontSize="18">
        This is {props.route.name} page.
      </Text>
    </Center>
  );
}
export default function DrawerNavigator() {
  return (
    <Box safeArea flex={1}>
      <Drawer.Navigator drawerContent={(props) => <MyDrawer {...props} />}>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Outbox" component={Component} />
        <Drawer.Screen name="Favorites" component={Component} />
        <Drawer.Screen name="Archive" component={Component} />
        <Drawer.Screen name="Trash" component={Component} />
        <Drawer.Screen name="Spam" component={Component} />
      </Drawer.Navigator>
    </Box>
  );
}
