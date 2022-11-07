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
    h1: {
      fontFamily: "Libre Baskerville"
    },
    h2: {
      fontFamily: "Roboto"
    },
    body1: {
      fontFamily: "sans-serif"
    }
  }
});

theme.typography.h1 = {
  ...theme.typography.h1,
  fontSize: 24,
  [theme.breakpoints.up("md")]: {
    fontSize: 38
  }
};

theme.typography.h2 = {
  ...theme.typography.h2,
  fontSize: 16,
  fontWeight: 700,
  [theme.breakpoints.up("md")]: {
    fontSize: 22,
    fontWeight: 500
  }
};
