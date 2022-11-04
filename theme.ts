import {createTheme} from "@mui/material/styles";

export const headerFont = {
  fontFamily: "Libre Baskerville"
};

export const theme = createTheme({
  palette: {
    background: {
      default: "#f6f8fa"
    }
  }
});

theme.typography.h4 = {
  ...theme.typography.h4,
  ...headerFont,
  fontSize: 24,
  [theme.breakpoints.up("md")]: {
    fontSize: 34
  }
};

theme.typography.h5 = {
  ...theme.typography.h5,
  ...headerFont,
  fontSize: 16,
  fontWeight: "bold",
  [theme.breakpoints.up("md")]: {
    fontSize: 24,
    fontWeight: "normal"
  }
};
