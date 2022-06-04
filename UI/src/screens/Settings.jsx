import { useNavigation } from "@react-navigation/native";
import {
  Box,
  Button,
  Center,
  Heading,
  Divider,
  HStack,
  useColorModeValue,
  VStack,
} from "native-base";
import React, { useEffect } from "react";
import BadIcon from "../components/Icon/BadIcon";
import GoodIcon from "./../components/Icon/GoodIcon";
export default function Settings(props) {
  const navigation = useNavigation();

  return (
    <Center
      alignItems="center"
      justifyContent="center"
      bg={useColorModeValue("#D9D9D9", "#595959")}
      px={4}
      flex={1}
      minW={250}
      w="100%"
      safeArea
    >
      {/* <Box h={["100", "110"]}></Box> */}
      {/* <BadIcon w={"100%"} height={"100%"} my={1} /> */}
      {/* <GoodIcon w={"100%"} height={"100%"} my={1} /> */}
      <VStack space={3} size="100%">
        <Heading fontSize={["2xl", "3xl", "4xl"]} fontWeight="bold">
          Theres nothing here
        </Heading>
        <HStack space={2} alignItems="center">
        <Divider 
          my="2" 
          _light={{
            bg: "muted.800"
          }} 
          _dark={{
            bg: "muted.50"
          }} />
        </HStack>

        <Button
          bg="ROI.LightOrange"
          _hover={{ bg: "ROI.BurntOrange" }}
          _pressed={{ bg: "ROI.BurntOrange" }}
          onPress={() => navigation.navigate("Home")}
        >
          Home
        </Button>
        <Button
          bg="ROI.LightOrange"
          _hover={{ bg: "ROI.BurntOrange" }}
          _pressed={{ bg: "ROI.BurntOrange" }}
          onPress={() => navigation.navigate("Staff")}
        >
          Staff List
        </Button>
        <Button
          bg="ROI.LightOrange"
          _hover={{ bg: "ROI.BurntOrange" }}
          _pressed={{ bg: "ROI.BurntOrange" }}
          onPress={() => navigation.navigate("Create")}
        >
          Create new profile
        </Button>
        
      </VStack>
    </Center>
  );
}
