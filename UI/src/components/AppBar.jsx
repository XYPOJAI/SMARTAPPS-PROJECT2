import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { getHeaderTitle } from "@react-navigation/elements";
import {
  Box,
  HStack,
  Icon,
  IconButton,
  StatusBar,
  Text,
  useColorModeValue,
} from "native-base";
import React, { useState } from "react";
import { getColor } from "./../theme";
import SearchModal from "./SearchModal";
const TitleIconButton = (props) => {
  return (
    <IconButton
      icon={
        <Icon
          as={props.as || MaterialIcons}
          name={props.name}
          size={props.iconSize || "lg"}
          color={props.color || "white"}
        />
      }
      _hover={
        props._hover || {
          bg: "orange.600:alpha.20",
        }
      }
      _pressed={
        props._pressed || {
          bg: "orange.600:alpha.20",
        }
      }
      onPress={props.onPress}
    />
  );
};

export default function AppBar(props) {
  const toggleColorMode = props.colorModeToggle;

  const [showModal, setShowModal] = useState(false);

  const iconSize = ["lg"];
  // navigation = props.navigation;
  return (
    <>
      <StatusBar bg="#fff" barStyle="light-content" />
      <Box safeAreaTop bg="#fff" />
      <HStack
        // bg={props.headerStyle.backgroundColor}
        _dark={{ bg: getColor("title_dark") }}
        _light={{ bg: getColor("title_light") }}
        // px="1"
        // py="3"
        justifyContent="space-between"
        alignItems="center"
        w="100%"
        // h="100%"
        h={["50", "60"]}
        // maxW="350"
      >
        <HStack alignItems="center">
          <TitleIconButton
            name="menu"
            onPress={() => props.navigation.openDrawer()}
          />
          <Text color="white" fontSize="20">
            {getHeaderTitle(props.options, props.route.name)}
          </Text>
        </HStack>
        <HStack>
          <TitleIconButton
            as={Ionicons}
            name={useColorModeValue("sunny", "sunny-outline")}
            // name={useColorModeValue("sunny-outline", "sunny")}

            // _dark={{ name: "sunny-outline" }}
            // _light={{ name: "sunny" }}

            //wb-sunny weather-sunny //md-sunny md-sunny-outline md-sunny-sharp
            onPress={toggleColorMode}
          />
          <TitleIconButton name="search" onPress={() => setShowModal(true)} />
          <TitleIconButton
            name="more-vert"
            // onPress={}
          />
        </HStack>
      </HStack>
      <SearchModal showModal={showModal} setShowModal={setShowModal} />
    </>
  );
}
