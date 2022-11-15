import React from "react";
import Head from "next/head";
import {Card, CardContent, CardMedia, Container, Typography} from "@mui/material";
import FotoCursaSantSilvestre from "../../public/cursa-sant-silvestre.jpg";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator
} from "@mui/lab";
import {CalendarMonth, DirectionsRun, Hotel, SportsScore} from "@mui/icons-material";

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
      <Timeline position="right">
        <TimelineItem>
          <TimelineOppositeContent sx={{m: "auto 0"}} color="text.secondary">
            Gener 2022
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="success"><SportsScore /></TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{py: 2}}>
            <Typography variant="h6" component="span">
              Inici de temporada 2022
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot>
              <CalendarMonth />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{py: 2}}>
            <Typography variant="h6" component="span">
              Sortides vàries
            </Typography>
            <Typography>Cercaviles a altres pobles, activitats de festa major...</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent sx={{m: "auto 0"}} color="text.secondary">
            Agost 2022
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot>
              <Hotel />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{py: 2}}>
            <Typography variant="h6" component="span">
              Vacances
            </Typography>
            <Typography>Un mes per carregar les piles!</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot>
              <CalendarMonth />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{py: 2}}>
            <Typography variant="h6" component="span">
              Sortides vàries
            </Typography>
            <Typography>Cercaviles a altres pobles</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent sx={{m: "auto 0"}} color="text.secondary">
            31 Desembre 2022
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
              <DirectionsRun />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{py: 2}}>
            <Typography variant="h6" component="span">
              Cursa de Sant Silvestre
            </Typography>
            <Typography>
              Participarem en la tradicional cursa de Sant Silvestre que organitza el Club atletisme les Tortugues de la Garriga
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent sx={{m: "auto 0"}} color="text.secondary">
            31 Desembre 2022
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="error"><SportsScore /></TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{py: 2}}>
            <Typography variant="h6" component="span">
              Fi de temporada 2022 😢
            </Typography>
            <Typography>
              La cursa de Sant Silvestre serà l&apos;última sortida dels nostres gegants preferits. Però d&apos;aquí poc
              penjarem el calendari de 2023!
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Container>
  </>;
};

export default Index;
