import { useNavigation } from "@react-navigation/native";
import {
  Button,
  Center,
  Divider,
  Heading,
  HStack,
  useColorModeValue,
  VStack,
} from "native-base";
import React from "react";
export default function Settings(props) {
  const navigation = useNavigation();
  navigation.closeDrawer();
  return (
    <Center
      alignItems="center"
      justifyContent="center"
      bg={useColorModeValue("#D9D9D9", "#595959")}
      px={4}
      flex={1}
      minW={250}
      w="100%"
      pb={10}
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
              bg: "muted.800",
            }}
            _dark={{
              bg: "muted.50",
            }}
          />
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
