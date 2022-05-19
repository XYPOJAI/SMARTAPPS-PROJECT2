// import { useNavigation, useTheme } from "@react-navigation/native";
// import { Center, Heading, ScrollView, VStack } from "native-base";
import { MaterialIcons } from "@native-base/icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  Avatar,
  Box,
  Button,
  Heading,
  HStack,
  Icon,
  Pressable,
  Text,
} from "native-base";
import React, { useEffect, useState } from "react";
import { SwipeListView } from "react-native-swipe-list-view";
import Ionicons from "./../../node_modules/@expo/vector-icons/Ionicons.d";

function Staff() {
  // Navigation
  const navigation = useNavigation();
  const route = useRoute();

  // State
  const [profiles, setProfiles] = useState([]);

  // Effect
  useEffect(() => {
    switch (route.params?.op) {
      case "undefined":
        // get profiles
        break;
      case "create":
        // setProfiles to current profiles
        break;
      case "update":
        // setProfiles to current profiles
        break;
      case "delete":
        // setProfiles to current profiles
        break;
    }
  }, [route.params]);
  return (
    <Box textAlign="center" bg="white" flex={1} safeAreaTop>
      <Heading my={6} textAlign="center" size="lg">
        Staff list
      </Heading>
      <Button onPress={() => navigation.navigate("Home")}>Home</Button>

      {/* <Basic /> */}
    </Box>
  );
}

function Basic() {
  const [listData, setListData] = useState(
    Array(20)
      .fill("")
      .map((_, i) => ({
        key: `${i}`,
        text: `item #${i}`,
      }))
  );

  const closeRow = (rowMap, rowKey) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };

  const deleteRow = (rowMap, rowKey) => {
    closeRow(rowMap, rowKey);
    const newData = [...listData];
    const prevIndex = listData.findIndex((item) => item.key === rowKey);
    newData.splice(prevIndex, 1);
    setListData(newData);
  };

  const onRowDidOpen = (rowKey) => {
    console.log("This row opened", rowKey);
  };

  const renderItem = ({ item, index }) => (
    <Box>
      <Pressable
        onPress={() => console.log("You touched me")}
        alignItems="center"
        bg="white"
        borderBottomColor="trueGray.200"
        borderBottomWidth={1}
        justifyContent="center"
        height={50}
        underlayColor={"#AAA"}
        _pressed={{
          bg: "trueGray.200",
        }}
        py={8}
      >
        <HStack width="100%" px={4}>
          <HStack space={2} alignItems="center">
            <Avatar color="white" bg={"secondary.700"}>
              {index}
            </Avatar>
            <Text>{item.text}</Text>
          </HStack>
        </HStack>
      </Pressable>
    </Box>
  );

  const renderHiddenItem = (data, rowMap) => (
    <HStack flex={1} pl={2}>
      <Pressable
        px={4}
        ml="auto"
        cursor="pointer"
        bg="dark.500"
        justifyContent="center"
        onPress={() => closeRow(rowMap, data.item.key)}
        _pressed={{
          opacity: 0.5,
        }}
      >
        <Icon as={<Ionicons name="close" />} color="white" />
      </Pressable>
      <Pressable
        px={4}
        cursor="pointer"
        bg="red.500"
        justifyContent="center"
        onPress={() => deleteRow(rowMap, data.item.key)}
        _pressed={{
          opacity: 0.5,
        }}
      >
        <Icon as={<MaterialIcons name="delete" />} color="white" />
      </Pressable>
    </HStack>
  );

  return (
    <Box bg="white" safeArea flex={1}>
      <SwipeListView
        data={listData}
        renderItem={renderItem}
        renderHiddenItem={renderHiddenItem}
        rightOpenValue={-130}
        previewRowKey={"0"}
        previewOpenValue={-40}
        previewOpenDelay={3000}
        onRowDidOpen={onRowDidOpen}
      />
    </Box>
  );
}

export default Staff;
