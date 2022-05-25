import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Button, Center, Icon, Input, Modal } from "native-base";
import { useEffect, useState } from "react";
import { getProfilesAsync } from "./../users.service";

export default function SearchModal({ showModal, setShowModal }) {
  const navigation = useNavigation();
  const route = useRoute();
  const [input, setInput] = useState();
  const [profiles, setProfiles] = useState([]);
  useEffect(() => {
    getProfilesAsync().then((json) => setProfiles(json));
  }, [showModal]);
  function search() {
    let profile = profiles.find(
      (p) => p.firstName.toLowerCase() == input.toLowerCase()
    );
    if (profile == undefined) {
      // error not found
      setShowModal(false);
      return;
    }
    setShowModal(false);
    navigation.navigate("Details", profile);
  }
  // State

  return (
    <Center>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>Find Employee</Modal.Header>
          <Modal.Body>
            <Input
              placeholder="Enter name"
              width="100%"
              borderRadius="4"
              py="3"
              px="1"
              fontSize="14"
              InputLeftElement={
                <Icon
                  m="2"
                  ml="3"
                  size="6"
                  color="gray.400"
                  as={<MaterialIcons name="search" />}
                />
              }
              onChangeText={(input) => setInput(input)}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                variant="ghost"
                colorScheme="blueGray"
                onPress={() => {
                  setShowModal(false);
                }}
              >
                Cancel
              </Button>
              <Button
                onPress={() => {
                  search();
                }}
              >
                Search
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>
  );
}
