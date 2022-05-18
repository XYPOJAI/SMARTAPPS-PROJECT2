import { MaterialIcons } from "@expo/vector-icons";
import { Box, HStack, Icon, IconButton, StatusBar, Text } from "native-base";
import React from "react";
export default function AppBar(props) {
  const iconSize = ["lg"];

  return (
    <>
      <StatusBar bg="#3700B3" barStyle="light-content" />
      <Box safeAreaTop bg="#6200ee" />
      <HStack
        bg="#7e211f"
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
          <IconButton
            icon={
              <Icon
                size={iconSize}
                as={MaterialIcons}
                name="menu"
                color="white"
              />
            }
          />
          <Text color="white" fontSize="20" fontWeight="bold">
            {props.children}
          </Text>
        </HStack>
        <HStack>
          <IconButton
            icon={
              <Icon
                as={MaterialIcons}
                name="favorite"
                size={iconSize}
                color="white"
              />
            }
          />
          <IconButton
            icon={
              <Icon
                as={MaterialIcons}
                name="search"
                size={iconSize}
                color="white"
              />
            }
          />
          <IconButton
            icon={
              <Icon
                as={MaterialIcons}
                name="more-vert"
                size={iconSize}
                color="white"
              />
            }
          />
        </HStack>
      </HStack>
    </>
  );
}
