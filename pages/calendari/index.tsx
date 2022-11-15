import React from "react";
import Head from "next/head";
import {Card, CardContent, CardMedia, Container, Typography} from "@mui/material";
import FotoCursaSantSilvestre from "../../public/cursa-sant-silvestre.jpg";

const Index: React.FC = () => {
  return <>
    <Head><title>Calendari</title></Head>
    <Container maxWidth="sm" sx={{mt: 5, mb: 10}} disableGutters>
      <Typography component="h1" variant="h1" gutterBottom>Calendari</Typography>
      <Card sx={{mb: 5}}>
        <CardMedia component="img" height="140" image={FotoCursaSantSilvestre.src} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Propera sortida: Cursa de Sant Silvestre de la Garriga
          </Typography>
          <Typography gutterBottom component="div">
            31 Desembre 2022
          </Typography>
          <Typography paragraph color="text.secondary">
            Com cada any, participarem en la tradicional cursa de Sant Silvestre que organitzar el Club atletisme les
            Tortugues de la Garriga. Ens veiem allà!
          </Typography>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Fi de la temporada 😢
          </Typography>
          <Typography paragraph color="text.secondary">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            La cursa de Sant Silvestre serà l'última sortida dels nostres gegants preferits. Però d'aquí poc penjarem el
            calendari de 2023!
          </Typography>
        </CardContent>
      </Card>
    </Container>
  </>;
};

export default Index;
