import { MaterialCommunityIcons } from "@expo/vector-icons";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import {
  Box,
  Divider,
  HStack,
  Icon,
  Pressable,
  Text,
  useColorModeValue,
  VStack,
} from "native-base";
import * as React from "react";

const getIcon = (screenName) => {
  switch (screenName) {
    case "Home":
      return "home"; //home-outline
    case "Staff":
      return "account-box-multiple"; // account-box-multiple-outline
    case "Create":
      return "account-plus"; // account-plus-outline
    case "Settings":
      return "cog"; // cog-outline
    default:
      return undefined;

    // account-edit
    // account-details
    // alert
    //
  }
};

function DrawerContent(props) {
  return (
    <Pressable
      px="5"
      py="3"
      rounded="md"
      key={props.index}
      // bg={
      //   props.index === props.state.index
      //     ? "rgba(6, 182, 212, 0.1)"
      //     : "transparent"
      // }
      bg={useColorModeValue("ROI.White", "ROI.MidGrey")}
      onPress={(event) => {
        props.navigation.closeDrawer();
        props.navigation.navigate(props.name);
      }}
    >
      <HStack space="7" alignItems="center">
        <Icon
          color={useColorModeValue("ROI.MidGrey", "ROI.White")}
          // color={props.index === props.state.index ? "primary.500" : "gray.500"}
          size="5"
          as={<MaterialCommunityIcons name={getIcon(props.name)} />}
        />
        <Text
          fontWeight="500"
          color={useColorModeValue("ROI.MidGrey", "ROI.White")}
          // color={props.index === props.state.index ? "primary.500" : "gray.700"}
        >
          {props.name}
        </Text>
      </HStack>
    </Pressable>
  );
}

export default function MyDrawer(props) {
  return (
    // <Box bg={"#3b3b3b"} h="100%">
    <DrawerContentScrollView {...props}>
      <VStack divider={<Divider />} space="4" my="2" mx="1">
        <Box px="4">
          <Text bold color={useColorModeValue("ROI.MidGrey", "ROI.White")}>
            HR Manager
          </Text>
          <Text
            fontSize="14"
            mt="1"
            color={useColorModeValue("ROI.MidGrey", "ROI.White")}
            fontWeight="500"
          >
            Staff Details Management
          </Text>
        </Box>
        <VStack divider={<Divider />} space="4" justifyContent="space-between">
          <VStack space="3">
            {/* {console.log(props.state.routeNames.map((name, index) => name))}
            {props.state.routeNames.map((name, index) => {
              // if (name == "Settings") return;
              return (
                <DrawerContent
                  {...props}
                  name={name}
                  state={props.state}
                  index={index}
                />
              );
            })} */}
            {<DrawerContent {...props} name={"Home"} index={1} />}
            {<DrawerContent {...props} name={"Staff"} index={2} />}
            {<DrawerContent {...props} name={"Create"} index={3} />}
          </VStack>
          <VStack>
            {<DrawerContent {...props} name={"Settings"} index={4} />}
          </VStack>
        </VStack>
      </VStack>
    </DrawerContentScrollView>
    // </Box>
  );
}
