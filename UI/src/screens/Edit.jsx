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
import { React } from "react";
import { updateProfileAsync } from "./../users.service.js";

const validate = (values) => {
  const errors = {};
  !values.id && (errors.id = "Required");
  !values.firstName && (errors.firstName = "Required");
  !values.lastName && (errors.lastName = "Required");
  !values.phone && (errors.phone = "Required");
  !values.department && (errors.department = "Required");

  !values.address.street && (errors.street = "Required");
  !values.address.city && (errors.city = "Required");
  !values.address.state && (errors.state = "Required");
  !values.address.ZIP && (errors.ZIP = "Required");
  !values.address.country && (errors.country = "Required");

  return errors;
};
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

export default function Edit() {
  const navigation = useNavigation();
  const route = useRoute();
  let u = route.params;

  const onSubmit = (data) => {
    // add user
    console.log(JSON.stringify(data));
    console.log("submitting with ", data);
    updateProfileAsync(data).then((json) => {
      let params = { op: "update", data: data };
      navigation.navigate("Staff", params);
    });
    // Add toasts
    // if (!toast.isActive(id)) {
    //   toast.show({
    //     id,
    //     title: "Hey! You can't create a duplicate toast"
    //   });
    // }
    // navigation.goBack();
  };

  return (
    <Center
      bg={useColorModeValue("#D9D9D9", "#595959")}
      // px={4}
      // flex={1}
      // minW={250}
      w="100%"
      safeArea
    >
      <Formik
        initialValues={{
          id: u.id,
          firstName: u.firstName,
          lastName: u.lastName,
          phone: u.phone,
          department: u.department,
          address: {
            street: u.address.street,
            city: u.address.city,
            state: u.address.state,
            ZIP: u.address.ZIP,
            country: u.address.country,
          },
        }}
        onSubmit={onSubmit}
        validate={validate}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
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
                    Update employee profile
                  </Heading>
                </Stack>

                {/* Id Name Phone Department Address: Street City State ZIP Country */}
                <CustomForm
                  label="ID"
                  id="id"
                  placeholder="Enter ID here"
                  isInvalid={"id" in errors}
                  value={values.id}
                  onChangeText={handleChange("id")}
                />
                <InputGroup>
                  <CustomForm
                    label="First Name"
                    id="firstName"
                    placeholder="e.g. John"
                    isInvalid={"firstName" in errors}
                    value={values.firstName}
                    onChangeText={handleChange("firstName")}
                    w="45%"
                  />
                  <CustomForm
                    label="Last Name"
                    id="lastName"
                    placeholder="e.g. Doe"
                    isInvalid={"lastName" in errors}
                    value={values.lastName}
                    onChangeText={handleChange("lastName")}
                    w="55%"
                  />
                </InputGroup>

                <CustomForm
                  label="Phone"
                  id="phone"
                  placeholder="e.g. 000-000-0000"
                  type="number"
                  isInvalid={"phone" in errors}
                  value={values.phone}
                  onChangeText={handleChange("phone")}
                />
                <CustomForm
                  label="Department"
                  id="department"
                  placeholder="e.g. department"
                  isInvalid={"department" in errors}
                  value={values.department}
                  onChangeText={handleChange("department")}
                />
                <FormControl
                //Address: Street City State ZIP Country
                >
                  <FormControl.Label htmlFor={"address"}>
                    {"Address"}
                  </FormControl.Label>
                  <InputGroup>
                    <FormInput
                      id={"street"}
                      name={"Street"}
                      type={"text"}
                      placeholder={"Street"}
                      w="60%"
                      isInvalid={"street" in errors}
                      value={values.address.street}
                      onChangeText={handleChange("address.street")}
                    />
                    <FormInput
                      id={"city"}
                      name={"City"}
                      type={"text"}
                      placeholder={"City"}
                      w="40%"
                      isInvalid={"city" in errors}
                      value={values.address.city}
                      onChangeText={handleChange("address.city")}
                    />
                  </InputGroup>
                  <InputGroup>
                    <FormInput
                      id={"state"}
                      name={"State"}
                      type={"text"}
                      placeholder={"State"}
                      w="40%"
                      isInvalid={"state" in errors}
                      value={values.address.state}
                      onChangeText={handleChange("address.state")}
                    />
                    <FormInput
                      id={"ZIP"}
                      name={"ZIP"}
                      type={"text"}
                      placeholder={"ZIP"}
                      w="20%"
                      isInvalid={"ZIP" in errors}
                      value={values.address.ZIP}
                      onChangeText={handleChange("address.ZIP")}
                    />
                    <FormInput
                      id={"country"}
                      name={"Country"}
                      type={"text"}
                      placeholder={"Country"}
                      w="40%"
                      isInvalid={"country" in errors}
                      value={values.address.country}
                      onChangeText={handleChange("address.country")}
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
                  onPress={handleSubmit}
                >
                  Save
                </Button>

                <Button
                  bg="ROI.LightOrange"
                  _hover={{ bg: "ROI.BurntOrange" }}
                  _pressed={{ bg: "ROI.BurntOrange" }}
                  type="submit"
                  onPress={() => navigation.goBack()}
                >
                  Cancel
                </Button>
              </VStack>
            </FormControl>
          </VStack>
        )}
      </Formik>
    </Center>
  );
}
