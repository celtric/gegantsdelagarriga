import React from "react";
import Head from "next/head";
import {Container, Grid, Paper, Typography} from "@mui/material";

type DataSchema = {
  day: string,
  month: string,
  place: string,
  type: string,
  time: "Matí" | "Tarda" | "Vespre" | "Tot el dia"
};

const data: DataSchema[] = [
  {
    day: "21",
    month: "Gener",
    place: "Les Borges del Camp",
    type: "Trobada",
    time: "Matí"
  },
  {
    day: "4",
    month: "Febrer",
    place: "Granollers",
    type: "Cursa de gegants",
    time: "Tarda"
  },
  {
    day: "4 i 5",
    month: "Març",
    place: "La Garriga",
    type: "Fira de la Botifarra",
    time: "Tot el dia"
  },
  {
    day: "19",
    month: "Març",
    place: "Manresa-Poble Nou",
    type: "Trobada",
    time: "Matí"
  },
  {
    day: "15",
    month: "Abril",
    place: "Piera",
    type: "Trobada",
    time: "Tarda"
  },
  {
    day: "16",
    month: "Abril",
    place: "La Garriga",
    type: "Tres tombs",
    time: "Matí"
  },
  {
    day: "7",
    month: "Maig",
    place: "Cabrils",
    type: "Trobada",
    time: "Matí"
  },
  {
    day: "3",
    month: "Juny",
    place: "La Garriga",
    type: "XXXII Trobada",
    time: "Tarda"
  },
  {
    day: "8",
    month: "Juny",
    place: "La Garriga",
    type: "Corpus",
    time: "Matí"
  },
  {
    day: "10",
    month: "Juny",
    place: "La Garriga",
    type: "Corpus - Cercavila infantil",
    time: "Tarda"
  },
  {
    day: "11",
    month: "Juny",
    place: "La Garriga",
    type: "Corpus - Catifa + Processó",
    time: "Tot el dia"
  },
  {
    day: "23",
    month: "Juny",
    place: "La Garriga",
    type: "Flama del Canigó",
    time: "Vespre"
  },
  {
    day: "25",
    month: "Juny",
    place: "Olesa de Montserrat",
    type: "Trobada",
    time: "Matí"
  },
  {
    day: "15",
    month: "Juliol",
    place: "Castellterçol",
    type: "Trobada",
    time: "Tarda"
  },
  {
    day: "27",
    month: "Juliol",
    place: "La Garriga",
    type: "Festa Major - Cercavila",
    time: "Tarda"
  },
  {
    day: "28",
    month: "Juliol",
    place: "La Garriga",
    type: "Festa Major - Taller de didals",
    time: "Tarda"
  },
  {
    day: "30",
    month: "Juliol",
    place: "La Garriga",
    type: "Festa Major - Cercavila avis",
    time: "Matí"
  },
  {
    day: "26",
    month: "Agost",
    place: "Sant Hilari Sacalm",
    type: "Trobada",
    time: "Matí"
  },
  {
    day: "9",
    month: "Setembre",
    place: "Sant Celoni",
    type: "Trobada",
    time: "Tarda"
  },
  {
    day: "16",
    month: "Setembre",
    place: "Sabadell-Gràcia",
    type: "Trobada",
    time: "Tarda"
  },
  {
    day: "7 i 8",
    month: "Octubre",
    place: "La Garriga",
    type: "Jornades Modernistes",
    time: "Tot el dia"
  },
  {
    day: "22",
    month: "Octubre",
    place: "Sabadell-Gràcia",
    type: "Trobada comarcal",
    time: "Matí"
  },
  {
    day: "26",
    month: "Novembre",
    place: "Aiguafreda",
    type: "Trobada",
    time: "Matí"
  },
  {
    day: "31",
    month: "Desembre",
    place: "La Garriga",
    type: "Cursa de Sant Silvestre",
    time: "Tarda"
  }
];

const Index: React.FC = () => {
  return <>
    <Head><title>Calendari 2023</title></Head>
    <Container maxWidth="sm" sx={{mt: 5, mb: 10}} disableGutters>
      <Typography component="h1" variant="h1" gutterBottom sx={{mb: 3}}>Calendari 2023</Typography>
      {data.map(({day, month, place, type, time}, index) => <Paper key={index} sx={{overflow: "hidden", mb: 2}}>
        <Grid container sx={{bgcolor: "#f6f8fa"}} alignItems="center">
          <Grid item xs={2} textAlign="center">
            <Typography variant="h6" component="span">{day}</Typography>
            <Typography>{month}</Typography>
          </Grid>
          <Grid item xs sx={{bgcolor: "#fff", p: 2, pt: 1}}>
            <Typography variant="h6" component="span">{type}</Typography>
            <Typography>{place}, {time}</Typography>
          </Grid>
        </Grid>
      </Paper>)}
    </Container>
  </>;
};

export default Index;
