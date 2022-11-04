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
  <Box component="main" sx={{bgcolor: "#fff", p: 10, pt: 5}}>
    <Container maxWidth="lg">
      <Component {...pageProps} />
    </Container>
  </Box>
  <Footer />
</ThemeProvider>;

export default App;
