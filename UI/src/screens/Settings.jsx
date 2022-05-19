import { useNavigation } from "@react-navigation/native";
import { Button, Center, Heading, HStack, VStack } from "native-base";
import React from "react";
import BadIcon from "../components/Icon/BadIcon";
import ToggleDarkMode from "../components/ToggleDarkMode";
import { getColor } from "../theme";
// import RoiIcon from "./../components/Icon/Icon";

export default function Settings(props) {
  const navigation = useNavigation();

  return (
    <Center
      _dark={{ bg: getColor("bg_dark") }}
      _light={{ bg: getColor("bg_light") }}
      px={4}
      flex={1}
      minW={250}
      w="100%"
      safeArea
    >
      <VStack space={5} alignItems="center" size="100%">
        <BadIcon />
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
        <Button onPress={() => navigation.navigate("Staff")}>Staff</Button>
        <Button onPress={() => navigation.navigate("Details")}>Details</Button>

        <Button
          isLoading
          isLoadingText="Loading staff"
          variant="outline"
        ></Button>
        <ToggleDarkMode />
      </VStack>
    </Center>
  );
}
