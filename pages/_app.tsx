import * as React from "react";
import {ThemeProvider} from "@mui/material/styles";
import Header from "./_header";
import Footer from "./_footer";
import {Box, Container, CssBaseline} from "@mui/material";
import {AppProps} from "next/app";
import {theme} from "../theme";

const App: React.FC<AppProps> = ({Component, pageProps}) => <ThemeProvider theme={theme}>
  <CssBaseline />
  <Header />
  <Box component="main" sx={{bgcolor: "#fff", p: 1, "& img": {maxWidth: "100%"}}}>
    <Container maxWidth="lg" sx={{mt: {xs: 2, md: 5}, mb: {xs: 5, md: 10}}}>
      <Component {...pageProps} />
    </Container>
  </Box>
  <Footer />
</ThemeProvider>;

export default App;
