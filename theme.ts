import {createTheme} from "@mui/material/styles";

export const headerFont = {
  fontFamily: "Libre Baskerville"
};

export const theme = createTheme({
  palette: {
    background: {
      default: "#f6f8fa"
    }
  },
  typography: {
    h1: headerFont,
    h2: headerFont,
    h3: headerFont,
    h4: headerFont,
    h5: headerFont,
    h6: headerFont
  }
});
