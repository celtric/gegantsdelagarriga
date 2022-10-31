import React from "react";
import Head from "next/head";
import {Container, Divider, Typography} from "@mui/material";

const Index: React.FC = () => {
  return <>
    <Head><title>Contacte</title></Head>
    <Container maxWidth="md" sx={{mt: 5, mb: 10}}>
      <Typography component="h1" variant="h4" gutterBottom>Contacte</Typography>
      <Divider sx={{mb: 3}} />
    </Container>
  </>;
};

export default Index;
