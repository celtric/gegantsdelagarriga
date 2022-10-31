import * as React from "react";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import Header from "./_header";
import Footer from "./_footer";
import {Container, CssBaseline} from "@mui/material";
import {AppProps} from "next/app";

const theme = createTheme();

const App: React.FC<AppProps> = ({ Component, pageProps }) => <ThemeProvider theme={theme}>
  <CssBaseline />
  <Container maxWidth="lg">
    <Header />
    <main>
      <Component {...pageProps} />
    </main>
    <Footer />
  </Container>
</ThemeProvider>;

export default App;
