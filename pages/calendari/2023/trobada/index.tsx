import React from "react";
import Head from "next/head";
import {Box, Container, Divider, Paper, Typography} from "@mui/material";
import FullSizeImage from "../../../../components/FullSizeImage";
import GegantsConvidats from "../../../../public/trobada-2023-gegants.png";

const trobada2023BackgroundColor = "#095577";
const trobada2023BorderColor = "#082e3e";
const trobada2023YelloColor = "#f6d10e";

const Index: React.FC = () => {
  return <>
    <Head><title>XXXII Trobada de gegants de la Garriga</title></Head>
    <Box sx={{backgroundColor: trobada2023BackgroundColor, border: `4px solid ${trobada2023BorderColor}`, borderWidth: "4px 0", pt: [1, 1, 5], px: 2}}>
      <Typography variant="h1" sx={{color: trobada2023YelloColor, textShadow: `2px 2px 0 ${trobada2023BorderColor}`}} mt={2} mb={[2, 2, 4]} align="center">
        XXXII Trobada de gegants de la Garriga
      </Typography>
      <Divider sx={{backgroundColor: trobada2023YelloColor, display: ["none", "none", "block"], maxWidth: 50, margin: "0 auto", boxShadow: `1px 1px 0 ${trobada2023BorderColor}`}} />
      <Typography component="h3" variant="h1" sx={{color: trobada2023YelloColor, fontSize: "150% !important", textShadow: `2px 2px 0 ${trobada2023BorderColor}`}} mt={3} mb={[3, 3, 5]} align="center">
        3 de Juny de 2023
      </Typography>
      <Container maxWidth="md" disableGutters sx={{marginBottom: "-74px", display: ["none", "none", "block"]}}>
        <FullSizeImage image={GegantsConvidats} alt="Tots els gegants convidats a la trobada"  />
      </Container>
    </Box>
    <Box sx={{backgroundColor: "#fff", p: 2}}>
      <Container maxWidth="sm" sx={{pt: [0, 0, 6], pb: [0, 0, 4]}} disableGutters>
        <Paper sx={{p: 3, mb: 2}}>Introducció</Paper>
        <Paper sx={{p: 3, mb: 2}}>Horaris</Paper>
        <Paper sx={{p: 3, mb: 2}}>Colles convidades</Paper>
        <Paper sx={{p: 3, mb: 2}}>Recorregut Google Maps</Paper>
        <iframe src="https://www.google.com/maps/d/embed?mid=1Wa8lUqe3Wv_fl38U-Ta3clPQ_WvEytg&ehbc=2E312F&z=16" width="100%" height="480" style={{border: "none"}}></iframe>
        <Paper sx={{p: 3, mb: 2}}>Recorregut PDF</Paper>
        <Paper sx={{p: 3, mb: 2}}>Cartell</Paper>
        <Paper sx={{p: 3, mb: 2}}>
          Ubicacions GPS per les colles convidades:
          <Paper sx={{p: 3, mt: 2, mb: 2}}>Aparcament</Paper>
          <Paper sx={{p: 3, mb: 2}}>Plantada</Paper>
          <Paper sx={{p: 3}}>Lloc del sopar</Paper>
        </Paper>
      </Container>
    </Box>
  </>;
};

export default Index;
