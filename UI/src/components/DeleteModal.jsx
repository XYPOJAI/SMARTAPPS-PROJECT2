import { useRoute } from "@react-navigation/native";
import { Button, Center, Modal } from "native-base";
// import { useState } from "react";
import { deleteProfilesAsyncById } from "./../users.service";
import Profile from "./Profile";

export default function DeleteModal({ showModal, setShowModal }) {
  const route = useRoute();
  function Delete() {
    console.log(route.profile.id);
    let res = deleteProfilesAsyncById(route.profile.id);
    console.log("DEDEDEDEDEDED");
    console.log(res);
    if (res == undefined) {
      navigation.navigate("Staff", { op: "fail" });
      return;
    }
    navigation.navigate("Staff", { op: "delete", data: route.profile });
  }
  return (
    <Center>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>Delete Employee</Modal.Header>
          <Modal.Body>
            <Profile profile={route.profile} />
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                variant="ghost"
                colorScheme="blueGray"
                textColor="red"
                onPress={() => {
                  Delete();
                  setShowModal(false);
                }}
              >
                Delete
              </Button>
              <Button
                onPress={() => {
                  setShowModal(false);
                }}
              >
                Cancel
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>
  );
}
