import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {
  AlertDialog,
  Avatar as NativeAvatar,
  Box,
  Button,
  Flex,
  HStack,
  Icon,
  IconButton,
  Pressable,
  Spacer,
  Text,
  useColorModeValue,
} from "native-base";
import React from "react";
// import { PersonasAvatar } from "react-native-personas-avatar";
import Avatar, { genConfig } from "react-nice-avatar";
import { deleteProfilesAsyncById } from "./../users.service";

function ProfileButton({ icon, onPress }) {
  return (
    <IconButton
      icon={icon}
      _hover={{
        bg: useColorModeValue("ROI.MidGrey", "ROI.MidGrey"),
      }}
      _pressed={{
        bg: useColorModeValue("ROI.MidGrey", "ROI.MidGrey"),
      }}
      onPress={onPress}
    />
  );
}

export default function Profile({ profile }) {
  const navigation = useNavigation();
  const config = genConfig();

  const [isOpen, setIsOpen] = React.useState(false);

  const onClose = () => setIsOpen(false);
  const onDelete = () => {
    setIsOpen(false);
    deleteProfilesAsyncById(profile.id);
    navigation.navigate("Staff", { op: "delete", id: profile.id });
  };

  const cancelRef = React.useRef(null);
  // console.count();
  // return (
  //   <Box>
  //     <Avatar style={{ width: "8rem", height: "8rem" }} {...config} />

  //   </Box>
  // )
  return (
    <Box w="100%" borderColor="black" borderWidth="1px" borderRadius={10}>
      <Pressable
        _light={{
          _hover: { bg: "ROI.BurntOrange" },
          _pressed: { bg: "ROI.BurntOrange" },
        }}
        _dark={{
          _hover: { bg: "ROI.BurntOrange" },
          _pressed: { bg: "ROI.BurntOrange" },
        }}
        borderRadius={10}
        onPress={() => navigation.navigate("Details", profile)}
        // _dark={{
        //   bg: "coolGray.800",
        // }}
        // _light={{
        //   bg: "white",
        // }}
      >
        <Box w="100%" p={1}>
          <HStack w="100%" alignItems="center">
            <NativeAvatar
              bg="lightBlue.400"
              source={{
                uri: profile.uri ?? "",
              }}
              minW={3}
              mr={3}
            >
              <Avatar style={{ width: "3rem", height: "3rem" }} {...config} />
            </NativeAvatar>
            <Box maxW="40%" m={0}>
              <Text
                color="coolGray.800"
                _dark={{
                  color: "warmGray.50",
                }}
                bold
              >
                {profile.firstName + " " + profile.lastName}
              </Text>
            </Box>
            <Spacer />
            <Flex
              wrap="wrap"
              justifySelf="flex-end"
              direction={["column", "row"]}
              ml={0}
            >
              <ProfileButton
                icon={
                  <Icon
                    color={useColorModeValue("black", "ROI.White")}
                    // color={props.index === props.state.index ? "primary.500" : "gray.500"}
                    size="5"
                    as={<Ionicons name={"create"} />}
                  />
                }
                onPress={() => navigation.navigate("Edit", profile)}
              />
              <ProfileButton
                icon={
                  <Icon
                    color={useColorModeValue("black", "ROI.White")}
                    // color={props.index === props.state.index ? "primary.500" : "gray.500"}
                    size="5"
                    as={<Ionicons name={"trash"} />}
                  />
                }
                onPress={() => setIsOpen(!isOpen)}
              />
            </Flex>
          </HStack>
        </Box>
      </Pressable>
      <AlertDialog
        leastDestructiveRef={cancelRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <AlertDialog.Content>
          <AlertDialog.CloseButton />
          <AlertDialog.Header>Delete Customer</AlertDialog.Header>
          <AlertDialog.Body>
            {`Are you sure you want to delete ${profile.firstName} ${profile.lastName}?`}
          </AlertDialog.Body>
          <AlertDialog.Footer>
            <Button.Group space={2}>
              <Button
                variant="unstyled"
                colorScheme="coolGray"
                onPress={onClose}
                ref={cancelRef}
              >
                Cancel
              </Button>
              <Button colorScheme="danger" onPress={onDelete}>
                Delete
              </Button>
            </Button.Group>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
    </Box>
  );
}
