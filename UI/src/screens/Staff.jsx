// import { useNavigation, useTheme } from "@react-navigation/native";
// import { Center, Heading, ScrollView, VStack } from "native-base";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  Box,
  Button,
  Center,
  FlatList,
  Heading,
  Text,
  useColorModeValue,
  useToast,
} from "native-base";
import React, { useEffect, useState } from "react";
import Profile from "./../components/Profile";
import { getProfilesAsync } from "./../users.service";

export default function Staff() {
  // Navigation
  const navigation = useNavigation();
  navigation.closeDrawer();

  const toast = useToast();
  const route = useRoute();
  // State
  const [profiles, setProfiles] = useState([]);
  // getProfilesAsync().then((json) => setProfiles(json));
  // Effect

  useEffect(async () => {
    switch (route.params?.op) {
      case undefined:
        // get profiles
        let res = await getProfilesAsync();
        if (res == undefined) {
          navigation.navigate("Staff", { op: "fail" });
          return;
        }
        setProfiles(res);
        // navigation.navigate("Staff", { op: "fail" });
        break;
      case "create":
        // setProfiles to current profiles
        console.log("loading with ", route.params.data);
        setProfiles([...profiles, route.params.data]);
        toast.show({
          render: () => {
            return (
              <Box bg="emerald.500" px="2" py="1" rounded="sm" mb={5}>
                Successfully created
              </Box>
            );
          },
        });
        break;
      case "update":
        // setProfiles to current profiles
        setProfiles(
          profiles.map((u) =>
            u.id == route.params.data.id ? route.params.data : u
          )
        );
        toast.show({
          render: () => {
            return (
              <Box bg="emerald.500" px="2" py="1" rounded="sm" mb={5}>
                Successfully updated
              </Box>
            );
          },
        });
        break;
      case "delete":
        // setProfiles to current profiles
        setProfiles(profiles.filter((u) => u.id !== route.params.id));
        toast.show({
          render: () => {
            return (
              <Box bg="emerald.500" px="2" py="1" rounded="sm" mb={5}>
                Successfully deleted
              </Box>
            );
          },
        });
        break;
      case "fail":
        toast.show({
          render: () => {
            return (
              <Box bg="danger.700" px="2" py="1" rounded="sm" mb={5}>
                Something went wrong.
              </Box>
            );
          },
        });
        break;
    }
  }, [route.params]);

  console.log(profiles);
  return (
    <Center
      bg={useColorModeValue("#D9D9D9", "#595959")}
      px={4}
      flex={1}
      minW={250}
      w="100%"
      // pb={10}
    >
      <Heading my={6} textAlign="center" size="lg">
        Staff list
      </Heading>
      {!profiles.length ? (
        <Text>No profiles found</Text>
      ) : (
        <FlatList
          w="70%"
          data={profiles}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Profile profile={item} />}
        />
      )}
      <Button.Group w="70%" my={2}>
        <Button
          w="50%"
          onPress={() => navigation.navigate("Create")}
          bg="ROI.LightOrange"
          _hover={{ bg: "ROI.BurntOrange" }}
          _pressed={{ bg: "ROI.BurntOrange" }}
        >
          Create Profile
        </Button>
        <Button
          w="50%"
          onPress={() => navigation.navigate("Home")}
          bg="ROI.LightOrange"
          _hover={{ bg: "ROI.BurntOrange" }}
          _pressed={{ bg: "ROI.BurntOrange" }}
        >
          Home
        </Button>
      </Button.Group>
    </Center>
  );
}
{
  /* 
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

export default Staff; */
}
