import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  color: {
    primary: "#d32f2f",
    secondary: "#00BCD4",
    error: "#E64A19",
  },
  typography: {
    fontFamily: "Roboto",
  },
  shape: {
    borderRadius: 4,
    backgroundColor: "#FFFFFF",
    textColor: "#757575",
  },
});

export default theme;
