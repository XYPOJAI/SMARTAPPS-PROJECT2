import { useNavigation } from "@react-navigation/native";
import {
  Button,
  Center,
  Heading,
  HStack,
  useColorModeValue,
  VStack,
} from "native-base";
import React, { useEffect } from "react";
import BadIcon from "../components/Icon/BadIcon";
import { getProfilesAsync } from "../users.service";

// import RoiIcon from "./../components/Icon/Icon";

export default function Home(props) {
  const navigation = useNavigation();
  navigation.closeDrawer();
  useEffect(() => {
    getProfilesAsync();
  }, []);
  return (
    // <Center
    //   bg={useColorModeValue("#D9D9D9", "#595959")}
    //   px={4}
    //   flex={1}
    //   minW={250}
    //   w="100%"
    //   safeArea
    //   h="100%"
    //   alignItems="center"
    //   justifyContent="center"
    // >
    //   <ScrollView>
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
      <BadIcon w={"100%"} height={"100%"} my={1} />
      <VStack space={3} size="100%">
        {/* <RoiIcon /> */}
        <Heading fontSize={["2xl", "3xl", "4xl"]} fontWeight="bold">
          ROI Staff Manager
        </Heading>
        <HStack space={2} alignItems="center">
          {/* <Text>Click</Text>
          <Box
            _web={{
              _text: {
                fontFamily: "monospace",
                fontSize: "sm",
              },
            }}
            px={2}
            py={1}
            _dark={{ bg: "blueGray.800" }}
            _light={{ bg: "blueGray.200" }}
          >
            Staff
          </Box>
          <Text>to see all staff.</Text> */}
        </HStack>
        {/* <Link href="https://docs.nativebase.io" isExternal>
          <Text color="primary.500" underline fontSize={"xl"}>
            Learn NativeBase
          </Text>
        </Link> */}
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
        <Button
          isDisabled
          bg="ROI.LightOrange"
          _hover={{ bg: "ROI.BurntOrange" }}
          _pressed={{ bg: "ROI.BurntOrange" }}
          onPress={() => navigation.navigate("Settings")}
        >
          Settings
        </Button>

        {/* <Button
          isLoading
          isLoadingText="Loading staff"
          variant="outline"
        ></Button> */}
      </VStack>
    </Center>
    //   </ScrollView>
    // </Center>
  );
}
