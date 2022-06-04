import { useNavigation, useRoute } from "@react-navigation/native";
import { Formik } from "formik";
import {
  Button,
  Center,
  FormControl,
  Heading,
  Input,
  InputGroup,
  Stack,
  useColorModeValue,
  VStack,
} from "native-base";
import { React, useEffect, useState } from "react";

const FormInput = (props) => {
  return (
    <Input
      {...props}
      placeholderTextColor={useColorModeValue(
        "rgba(0, 0, 0, 0.5)",
        "rgba(255, 255, 255, 0.5)"
      )}
      _light={{
        color: "ROI.MidGrey",
        bg: "ROI.LightGrey",
        borderColor: "rgba(0, 0, 0, 0.5)",
        borderWidth: "0.4",
      }}
      _dark={{
        color: "ROI.White",
        bg: "ROI.MidGrey",
        borderColor: "ROI.Charcoal",
        borderWidth: "0.4",
      }}
      isRequired
    />
  );
};
// Id Name Phone Department Address: Street City State ZIP Country
const CustomForm = (props) => {
  return (
    <FormControl w={props.w}>
      <FormControl.Label htmlFor={props.id}>{props.label}</FormControl.Label>
      <FormInput {...props} w="100%" />
      <FormControl.ErrorMessage>{props.error}</FormControl.ErrorMessage>
    </FormControl>
  );
};

export default function Details() {
  const navigation = useNavigation();
  // navigation.closeDrawer();
  const route = useRoute();
  const [profile, setProfile] = useState(route.params);
  // console.log(route.params.profile);
  // console.log(route.params);

  useEffect(() => {
    if (profile != route.params) {
      setProfile(route.params);
    }
  }, [route.params]);

  // Add toasts
  // if (!toast.isActive(id)) {
  //   toast.show({
  //     id,
  //     title: "Hey! You can't create a duplicate toast"
  //   });
  // }
  // navigation.goBack();

  return (
    <Center
      bg={useColorModeValue("#D9D9D9", "#595959")}
      // px={4}
      flex={1}
      // minW={250}
      w="100%"
      safeArea
    >
      <Formik
        initialValues={{
          id: profile.id,
          firstName: profile.firstName,
          lastName: profile.lastName,
          phone: profile.phone,
          department: profile.department,
          address: {
            street: profile.address.street,
            city: profile.address.city,
            state: profile.address.state,
            ZIP: profile.address.ZIP,
            country: profile.address.country,
          },
        }}
      >
        {({ handleBlur, values, handleReset }) => (
          <VStack safeArea mx="3" p="2" py="8" w="90%" maxW="300px">
            <FormControl>
              <VStack space={3} mt="5">
                <Stack>
                  <Heading
                    size="lg"
                    fontWeight="600"
                    color="coolGray.800"
                    _dark={{
                      color: "warmGray.50",
                    }}
                    // color={useColorModeValue("#D9D9D9", "#595959")} // Add text colors
                  >
                    Employee details
                  </Heading>
                </Stack>

                {/* Id Name Phone Department Address: Street City State ZIP Country */}
                <CustomForm label="ID" id="id" value={profile.id} />
                <InputGroup>
                  <CustomForm
                    label="First Name"
                    id="firstName"
                    value={profile.firstName}
                    w="45%"
                  />
                  <CustomForm
                    label="Last Name"
                    id="lastName"
                    value={profile.lastName}
                    w="55%"
                  />
                </InputGroup>

                <CustomForm
                  label="Phone"
                  id="phone"
                  type="number"
                  value={profile.phone}
                />
                <CustomForm
                  label="Department"
                  id="department"
                  value={profile.department}
                />
                <FormControl
                //Address: Street City State ZIP Country
                >
                  <FormControl.Label htmlFor={"address"}>
                    {"Address"}
                  </FormControl.Label>
                  <InputGroup readonly>
                    <FormInput
                      readonly
                      id={"street"}
                      name={"Street"}
                      type={"text"}
                      w="60%"
                      value={profile.address.street}
                    />
                    <FormInput
                      readonly
                      id={"city"}
                      name={"City"}
                      type={"text"}
                      w="40%"
                      value={profile.address.city}
                    />
                  </InputGroup>
                  <InputGroup readonly>
                    <FormInput
                      id={"state"}
                      name={"State"}
                      type={"text"}
                      w="40%"
                      value={profile.address.state}
                      readonly
                    />
                    <FormInput
                      readonly
                      id={"ZIP"}
                      name={"ZIP"}
                      type={"text"}
                      w="20%"
                      value={profile.address.ZIP}
                    />
                    <FormInput
                      readonly
                      id={"country"}
                      name={"Country"}
                      type={"text"}
                      w="40%"
                      value={profile.address.country}
                    />
                  </InputGroup>
                </FormControl>
                {/* {"name" in errors ? (
              <FormControl.ErrorMessage>Error</FormControl.ErrorMessage>
            ) : (
              <FormControl.HelperText>
                Name should contain atleast 3 character.
              </FormControl.HelperText>
            )} */}

                <Button
                  bg="ROI.LightOrange"
                  _hover={{ bg: "ROI.BurntOrange" }}
                  _pressed={{ bg: "ROI.BurntOrange" }}
                  type="submit"
                  onPress={() => {
                    navigation.navigate("Edit", profile);
                  }}
                >
                  Edit
                </Button>

                <Button
                  bg="ROI.LightOrange"
                  _hover={{ bg: "ROI.BurntOrange" }}
                  _pressed={{ bg: "ROI.BurntOrange" }}
                  type="submit"
                  onPress={() => {
                    navigation.goBack();
                  }}
                >
                  Back
                </Button>
              </VStack>
            </FormControl>
          </VStack>
        )}
      </Formik>
    </Center>
  );
}
