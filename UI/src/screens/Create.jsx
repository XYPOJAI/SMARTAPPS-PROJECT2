import { useNavigation } from "@react-navigation/native";
import { Button, Text, View } from "native-base";
import React from "react";

function Create() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Create Screen</Text>
      <Button onPress={() => navigation.navigate("Home")}>Home</Button>
    </View>
  );
}

export default Create;
