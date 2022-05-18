import { Center, Image } from "native-base";
import React from "react";
const img = require("./ROI-BAD.png");
function BadIcon() {
  return (
    <Center w={["3xs", "2xs", "xs", "sm"]} h="50%">
      <Image
        resizeMode={"contain"}
        source={{
          uri: "https://i.ibb.co/BN0vrkJ/ROI-BAD.png",
        }}
        alt="ROI logo"
        w="100%"
        h="100%"
      />
    </Center>
  );
}

export default BadIcon;
