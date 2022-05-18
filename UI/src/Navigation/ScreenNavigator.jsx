import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppBar from "../components/AppBar";
import Create from "../screens/Create";
import Details from "../screens/Details";
import Edit from "../screens/Edit";
import Home from "../screens/Home";
import Staff from "../screens/Staff";
import DrawerNavigator from "./DrawerNavigator";

const Stack = createNativeStackNavigator();

export default function ScreenNavigator() {
  return (
    <Stack.Navigator
      headerMode="screen"
      screenOptions={{ header: (props) => <AppBar {...props} /> }}
    >
      <Stack.Screen
        name="Drawer"
        component={DrawerNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Staff" component={Staff} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="Create" component={Create} />
      <Stack.Screen name="Edit" component={Edit} />
      {/* <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} /> */}
    </Stack.Navigator>
  );
}
