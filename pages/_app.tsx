import * as React from "react";
import {ThemeProvider} from "@mui/material/styles";
import Header from "./_header";
import Footer from "./_footer";
import {CssBaseline} from "@mui/material";
import {AppProps} from "next/app";
import {theme} from "../theme";
import {Analytics} from "@vercel/analytics/react";

const App: React.FC<AppProps> = ({Component, pageProps}) => <ThemeProvider theme={theme}>
  <CssBaseline />
  <Header />
  <Component {...pageProps} />
  <Analytics />
  <Footer />
</ThemeProvider>;

export default App;
