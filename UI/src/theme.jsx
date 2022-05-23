import { extendTheme } from "native-base";
import { Appearance } from "react-native";
const colorScheme = Appearance.getColorScheme();
export const theme = extendTheme({
  colors: {
    // Add new color
    ROI: {
      Red: "#941a1d",
      RealRed: "#7e211f",
      Charcoal: "#262626",
      Grey: "#595959",
      White: "#ffffff",
      BurntOrange: "#c64c38",
      LightOrange: "#cb6d4f",
      MidGrey: "#3b3b3b",
      LightGrey: "#D9D9D9",
    },
  },
  config: {
    // Changing initialColorMode to 'dark'
    initialColorMode: String(colorScheme),
    strictMode: "error",
  },
});

export function getColor(mode) {
  switch (mode) {
    case "bg_dark":
      return "#595959";
    case "bg_light":
      return "#D9D9D9";
    case "title_dark":
      return "#262626";
    case "title_light":
      return "#941a1d";
    case "title_btn":
      return "#";
    case "title_btn_click":
      return "#";
    case "btn":
      return "#c64c38";
    case "btn_click":
      return "#cb6d4f";
    default:
      break;
  }
}
