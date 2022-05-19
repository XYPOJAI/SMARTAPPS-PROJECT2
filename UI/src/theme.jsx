import { extendTheme } from "native-base";

export const theme = extendTheme({
  colors: {
    // Add new color
    ROI: {
      50: "#E3F2F9",
      100: "#C5E4F3",
      200: "#A2D4EC",
      300: "#7AC1E4",
      400: "#47A9DA",
      500: "#0088CC",
      600: "#007AB8",
      700: "#006BA1",
      800: "#005885",
      900: "#003F5E",
    },
  },
  config: {
    // Changing initialColorMode to 'dark'
    initialColorMode: "dark",
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
