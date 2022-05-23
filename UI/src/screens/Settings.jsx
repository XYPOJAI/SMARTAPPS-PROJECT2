import { useNavigation } from "@react-navigation/native";
import { Center } from "native-base";
import React from "react";
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
    ></Center>
  );
}
