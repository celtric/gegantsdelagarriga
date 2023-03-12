import React from "react";
import Head from "next/head";
import {Accordion, AccordionDetails, AccordionSummary, Button, Container, Grid, Paper, Typography} from "@mui/material";
import {Download, ExpandMore} from "@mui/icons-material";

type DataSchema = {
  day: string,
  month: string,
  place: string,
  type: string,
  time: "Matí" | "Tarda" | "Vespre" | "Tot el dia",
  done: boolean
};

const data: DataSchema[] = [
  {
    day: "21",
    month: "Gener",
    place: "Les Borges del Camp",
    type: "Trobada",
    time: "Matí",
    done: true
  },
  {
    day: "4",
    month: "Febrer",
    place: "Granollers",
    type: "Cursa de gegants",
    time: "Tarda",
    done: true
  },
  {
    day: "26",
    month: "Febrer",
    place: "La Garriga",
    type: "Ball de gitanes",
    time: "Matí",
    done: true
  },
  {
    day: "4 i 5",
    month: "Març",
    place: "La Garriga",
    type: "Fira de la Botifarra",
    time: "Tot el dia",
    done: true
  },
  {
    day: "11",
    month: "Març",
    place: "La Garriga",
    type: "Presentació Federació",
    time: "Tarda",
    done: true
  },
  {
    day: "19",
    month: "Març",
    place: "Manresa-Poble Nou",
    type: "Trobada",
    time: "Matí",
    done: false
  },
  {
    day: "15",
    month: "Abril",
    place: "Piera",
    type: "Trobada",
    time: "Tarda",
    done: false
  },
  {
    day: "16",
    month: "Abril",
    place: "La Garriga",
    type: "Tres tombs",
    time: "Matí",
    done: false
  },
  {
    day: "7",
    month: "Maig",
    place: "Cabrils",
    type: "Trobada",
    time: "Matí",
    done: false
  },
  {
    day: "3",
    month: "Juny",
    place: "La Garriga",
    type: "XXXII Trobada",
    time: "Tarda",
    done: false
  },
  {
    day: "8",
    month: "Juny",
    place: "La Garriga",
    type: "Corpus",
    time: "Matí",
    done: false
  },
  {
    day: "10",
    month: "Juny",
    place: "La Garriga",
    type: "Corpus - Cercavila infantil",
    time: "Tarda",
    done: false
  },
  {
    day: "11",
    month: "Juny",
    place: "La Garriga",
    type: "Corpus - Catifa + Processó",
    time: "Tot el dia",
    done: false
  },
  {
    day: "23",
    month: "Juny",
    place: "La Garriga",
    type: "Flama del Canigó",
    time: "Vespre",
    done: false
  },
  {
    day: "25",
    month: "Juny",
    place: "Olesa de Montserrat",
    type: "Trobada",
    time: "Matí",
    done: false
  },
  {
    day: "1",
    month: "Juliol",
    place: "La Garriga",
    type: "100 anys de la colla Sardanista",
    time: "Tarda",
    done: false
  },
  {
    day: "15",
    month: "Juliol",
    place: "Castellterçol",
    type: "Trobada",
    time: "Tarda",
    done: false
  },
  {
    day: "27",
    month: "Juliol",
    place: "La Garriga",
    type: "Festa Major - Cercavila",
    time: "Tarda",
    done: false
  },
  {
    day: "28",
    month: "Juliol",
    place: "La Garriga",
    type: "Festa Major - Taller de didals",
    time: "Tarda",
    done: false
  },
  {
    day: "30",
    month: "Juliol",
    place: "La Garriga",
    type: "Festa Major - Cercavila avis",
    time: "Matí",
    done: false
  },
  {
    day: "26",
    month: "Agost",
    place: "Sant Hilari Sacalm",
    type: "Trobada",
    time: "Matí",
    done: false
  },
  {
    day: "9",
    month: "Setembre",
    place: "Sant Celoni",
    type: "Trobada",
    time: "Tarda",
    done: false
  },
  {
    day: "16",
    month: "Setembre",
    place: "Sabadell-Gràcia",
    type: "Trobada",
    time: "Tarda",
    done: false
  },
  {
    day: "7 i 8",
    month: "Octubre",
    place: "La Garriga",
    type: "Jornades Modernistes",
    time: "Tot el dia",
    done: false
  },
  {
    day: "22",
    month: "Octubre",
    place: "Sabadell-Gràcia",
    type: "Trobada comarcal",
    time: "Matí",
    done: false
  },
  {
    day: "26",
    month: "Novembre",
    place: "Aiguafreda",
    type: "Trobada",
    time: "Matí",
    done: false
  },
  {
    day: "31",
    month: "Desembre",
    place: "La Garriga",
    type: "Cursa de Sant Silvestre",
    time: "Tarda",
    done: false
  }
];

const Index: React.FC = () => {
  return <>
    <Head><title>Calendari 2023</title></Head>
    <Container maxWidth="sm" sx={{mt: 5, mb: 10}} disableGutters>
      <Typography component="h1" variant="h1" gutterBottom sx={{mb: 3}}>Calendari 2023</Typography>
      <Typography paragraph align="center">
        <Button variant="contained" startIcon={<Download />} href="/calendari-2023.pdf" target="_blank">
          Descarregar calendari 2023 en PDF
        </Button>
      </Typography>
      <Typography component="h2" variant="h2" gutterBottom sx={{my: 3}}>Sortides realitzades</Typography>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />}>Veure sortides ja realitzades</AccordionSummary>
        <AccordionDetails>
          {data.filter(({done}) => done).map(({day, month, place, type, time, done}, index) =>
            <Paper key={index} sx={{overflow: "hidden", mb: 2}}>
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
        </AccordionDetails>
      </Accordion>
      <Typography component="h2" variant="h2" gutterBottom sx={{my: 3}}>Properes sortides</Typography>
      {data.filter(({done}) => !done).map(({day, month, place, type, time, done}, index) =>
        <Paper key={index} sx={{overflow: "hidden", mb: 2}}>
          <Grid container sx={{bgcolor: index === 0 ? "#baebb7" : "#f6f8fa"}} alignItems="center">
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
