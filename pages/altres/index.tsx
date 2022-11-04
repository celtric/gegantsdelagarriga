import React from "react";
import Head from "next/head";
import {Container, Divider, Typography} from "@mui/material";

const Index: React.FC = () => {
  return <>
    <Head><title>Altres</title></Head>
    <Container maxWidth="md" sx={{mt: 5, mb: 10}} disableGutters>
      <Typography component="h1" variant="h4" gutterBottom>Altres</Typography>
      <ul>
        <li>La colla</li>
        <li>Vestimenta</li>
        <li>Repertori musical</li>
        <li>Gegants de cartró</li>
        <li>Gegants de paper per imprimir i pintar a casa</li>
        <li>Trencaclosques</li>
      </ul>
    </Container>
  </>;
};

export default Index;
