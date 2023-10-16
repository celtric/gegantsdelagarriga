import React, {Fragment} from "react";
import Head from "next/head";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Container,
  Grid,
  Link,
  Paper,
  Typography
} from "@mui/material";
import {ChevronRight, Download, ExpandMore} from "@mui/icons-material";
import StandardPage from "../../components/StandardPage";
import NextLink from "next/link";
import {blue} from "@mui/material/colors";

type Event = {
  day: string,
  month: string,
  place: string,
  type: string,
  time: "Matí" | "Tarda" | "Vespre" | "Nit" | "Tot el dia",
  url?: string,
  externalUrl?: boolean,
  done: boolean
};

const events: Event[] = [
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
    done: true
  },
  {
    day: "15",
    month: "Abril",
    place: "Piera",
    type: "Trobada",
    time: "Tarda",
    done: true
  },
  {
    day: "16",
    month: "Abril",
    place: "La Garriga",
    type: "Tres tombs",
    time: "Matí",
    done: true
  },
  {
    day: "7",
    month: "Maig",
    place: "Cabrils",
    type: "Trobada",
    time: "Matí",
    done: true
  },
  {
    day: "3",
    month: "Juny",
    place: "La Garriga",
    type: "XXXII Trobada",
    time: "Tarda",
    url: "/calendari/2023/trobada",
    done: true
  },
  {
    day: "8",
    month: "Juny",
    place: "La Garriga",
    type: "Corpus",
    time: "Matí",
    done: true
  },
  {
    day: "10",
    month: "Juny",
    place: "La Garriga",
    type: "Corpus - Cercavila infantil",
    time: "Tarda",
    done: true
  },
  {
    day: "10",
    month: "Juny",
    place: "La Garriga",
    type: "Sopar de Corpus",
    time: "Nit",
    url: "/sopar-corpus.jpg",
    externalUrl: true,
    done: true
  },
  {
    day: "11",
    month: "Juny",
    place: "La Garriga",
    type: "Corpus - Catifa + Processó",
    time: "Tot el dia",
    done: true
  },
  {
    day: "23",
    month: "Juny",
    place: "La Garriga",
    type: "Flama del Canigó",
    time: "Vespre",
    done: true
  },
  {
    day: "25",
    month: "Juny",
    place: "Olesa de Montserrat",
    type: "Trobada",
    time: "Matí",
    done: true
  },
  {
    day: "1",
    month: "Juliol",
    place: "La Garriga",
    type: "100 anys de la colla Sardanista",
    time: "Tarda",
    done: true
  },
  {
    day: "15",
    month: "Juliol",
    place: "Castellterçol",
    type: "Trobada",
    time: "Tarda",
    done: true
  },
  {
    day: "21",
    month: "Juliol",
    place: "La Garriga",
    type: "Saligarda - Cercavila",
    time: "Tarda",
    done: true
  },
  {
    day: "27",
    month: "Juliol",
    place: "La Garriga",
    type: "Festa Major - Cercavila",
    time: "Tarda",
    done: true
  },
  {
    day: "28",
    month: "Juliol",
    place: "La Garriga",
    type: "Festa Major - Taller de capgrossos",
    time: "Tarda",
    done: true
  },
  {
    day: "30",
    month: "Juliol",
    place: "La Garriga",
    type: "Festa Major - Cercavila avis",
    time: "Matí",
    done: true
  },
  {
    day: "30",
    month: "Juliol",
    place: "La Garriga",
    type: "Festa Major - Seguici final",
    time: "Nit",
    done: true
  },
  {
    day: "26",
    month: "Agost",
    place: "Sant Hilari Sacalm",
    type: "Trobada",
    time: "Matí",
    done: true
  },
  {
    day: "16",
    month: "Setembre",
    place: "Sabadell-Gràcia",
    type: "Trobada",
    time: "Tarda",
    done: true
  },
  {
    day: "14",
    month: "Octubre",
    place: "La Garriga",
    type: "Jornades Modernistes",
    time: "Matí",
    done: true
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

const EventList: React.FC<{ events: Event[], highlightFirst: boolean }> = ({events, highlightFirst}) => {
  return <>
    {events.map(({day, month, place, type, time, url, externalUrl}, index) =>
      <Fragment key={index}>
        {url &&
          <Paper sx={{
            display: "block",
            textDecoration: "none",
            overflow: "hidden",
            mb: 2,
            cursor: "pointer",
            "&:hover": {outline: `2px solid ${blue["700"]}`}
          }} component={NextLink} href={url} target={externalUrl === true ? "_blank" : undefined}>
            <Grid container sx={{bgcolor: highlightFirst && index === 0 ? "#baebb7" : "#f6f8fa"}} alignItems="center">
              <Grid item xs={2} textAlign="center">
                <Typography variant="h6" component="span">{day}</Typography>
                <Typography>{month}</Typography>
              </Grid>
              <Grid item container xs sx={{bgcolor: "#fff", p: 2, pt: 1}} alignItems="center">
                <Grid item xs>
                  <Typography variant="h6" component="span">{type}</Typography>
                  <Typography>{place}, {time}</Typography>
                  <Typography>
                    <Link>Més info &rsaquo;</Link>
                  </Typography>
                </Grid>
                <Grid item>
                  <ChevronRight fontSize="large" />
                </Grid>
              </Grid>
            </Grid>
          </Paper>}
        {!url && <Paper key={index} sx={{overflow: "hidden", mb: 2}}>
          <Grid container sx={{bgcolor: highlightFirst && index === 0 ? "#baebb7" : "#f6f8fa"}} alignItems="center">
            <Grid item xs={2} textAlign="center">
              <Typography variant="h6" component="span">{day}</Typography>
              <Typography>{month}</Typography>
            </Grid>
            <Grid item xs sx={{bgcolor: "#fff", p: 2, pt: 1}}>
              <Typography variant="h6" component="span">{type}</Typography>
              <Typography>{place}, {time}</Typography>
            </Grid>
          </Grid>
        </Paper>}
      </Fragment>)}
  </>;
};

const Index: React.FC = () => {
  return <>
    <Head><title>Calendari 2023</title></Head>
    <StandardPage>
      <Container maxWidth="sm" sx={{mt: 5, mb: 10}} disableGutters>
        <Typography component="h1" variant="h1" gutterBottom sx={{mb: 3}}>Calendari 2023</Typography>
        <Typography component="h2" variant="h2" gutterBottom sx={{my: 3}}>Properes sortides</Typography>
        <EventList events={events.filter(({done}) => !done)} highlightFirst={true} />
        <Typography component="h2" variant="h2" gutterBottom sx={{my: 3}}>Sortides realitzades</Typography>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>Veure sortides ja realitzades</AccordionSummary>
          <AccordionDetails>
            <EventList events={events.filter(({done}) => done)} highlightFirst={false} />
          </AccordionDetails>
        </Accordion>
        <Typography paragraph align="center" sx={{mt: 4}}>
          <Button variant="contained" startIcon={<Download />} href="/calendari-2023.pdf" target="_blank">
            Descarregar calendari 2023 en PDF
          </Button>
        </Typography>
      </Container>
    </StandardPage>
  </>;
};

export default Index;
