import { Center, Image, Box } from "native-base";
import React from "react";
const img = require("./ROILOGO.png");
function GoodIcon(props) {
  return (
    <Center w={["3xs", "2xs", "xs", "sm"]} h="40%">
      <Box w={"100%"} h="100%" borderWidth={1} borderColor={"white"} borderRadius={10}>
      <Image
        resizeMode={"contain"}
        source={{
          uri: "https://i.ibb.co/gFDK5Bt/ROILOGO.png",
        }}
        // _dark={{source:{uri:"https://i.ibb.co/XXSp1yp/ROI-GREY.png"}}}
        // _light={{source:{uri:"https://i.ibb.co/wdDP7PD/ROI-COLOR.png"}}}
        overflow="hidden"
        alt="ROI logo"
        w="100%"
        h="100%"
        borderWidth={1} borderColor={"white"}
        borderRadius={10}
      />
      </Box>
    </Center>
  );
}

export default GoodIcon;
