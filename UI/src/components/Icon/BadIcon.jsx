import { Center, Image } from "native-base";
import React from "react";
const img = require("./ROI-BAD.png");
function BadIcon(props) {
  return (
    <Center w={["3xs", "2xs", "xs", "sm"]} h="40%">
      <Image
        resizeMode={"contain"}
        source={{
          uri: "https://i.ibb.co/BN0vrkJ/ROI-BAD.png",
        }}
        // _dark={{source:{uri:"https://i.ibb.co/XXSp1yp/ROI-GREY.png"}}}
        // _light={{source:{uri:"https://i.ibb.co/wdDP7PD/ROI-COLOR.png"}}}

        alt="ROI logo"
        w="100%"
        h="100%"
      />
    </Center>
  );
}

export default BadIcon;
