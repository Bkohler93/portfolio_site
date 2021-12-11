import { createTheme, responsiveFontSizes } from "@mui/material/styles";

// Create a theme instance.
let theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#E27D60",
    },
    backgrounds: {
      top: "#FFFFFF",
      mid: "#EAEAEA",
      bot: "#D5D5D5",
    },
    fonts: {
      divider: "#6B6b6b",
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
