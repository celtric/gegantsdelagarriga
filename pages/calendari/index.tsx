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
import FullSizeImage from "../../components/FullSizeImage";

type Event = {
  day: string,
  month: "Gener" | "Febrer" | "Març" | "Abril" | "Maig" | "Juny" | "Juliol" | "Agost" | "Setembre" | "Octubre" | "Novembre" | "Desembre",
  place: string,
  type: string,
  time: "Matí" | "Tarda" | "Vespre" | "Nit" | "Tot el dia" | "A concretar",
  url?: string,
  externalUrl?: boolean,
  done: boolean
};

const events: Event[] = [
  {
    day: "19",
    month: "Gener",
    place: "Sant Antoni de Vilamajor",
    type: "Trobada",
    time: "Matí",
    done: true
  },
  {
    day: "9",
    month: "Febrer",
    place: "Pallejà",
    type: "Trobada",
    time: "Matí",
    done: true
  },
  {
    day: "15",
    month: "Febrer",
    place: "La Garriga",
    type: "Malhivern, festa popular d'hivern",
    time: "Tarda",
    done: true
  },
  {
    day: "15",
    month: "Març",
    place: "La Garriga",
    type: "Fira de la Botifarra",
    time: "Matí",
    done: true
  },
  {
    day: "30",
    month: "Març",
    place: "La Garriga",
    type: "Tres tombs",
    time: "Matí",
    done: false
  },
  {
    day: "27",
    month: "Abril",
    place: "Argentona",
    type: "Trobada",
    time: "Matí",
    done: false
  },
  {
    day: "3",
    month: "Maig",
    place: "Puiggraciós",
    type: "Baixada de la verge",
    time: "Nit",
    done: false
  },
  {
    day: "4",
    month: "Maig",
    place: "Puiggraciós",
    type: "Travessa",
    time: "Matí",
    done: false
  },
  {
    day: "18",
    month: "Maig",
    place: "Barcelona-Guinardó",
    type: "Trobada",
    time: "Matí",
    done: false
  },
  {
    day: "14",
    month: "Juny",
    place: "La Garriga",
    type: "34a Trobada de gegants",
    time: "Tarda",
    done: false
  },
  {
    day: "19",
    month: "Juny",
    place: "La Garriga",
    type: "Balls de Corpus",
    time: "Tarda",
    done: false
  },
  {
    day: "21",
    month: "Juny",
    place: "La Garriga",
    type: "Cercavila infantil",
    time: "Tarda",
    done: false
  },
  {
    day: "22",
    month: "Juny",
    place: "La Garriga",
    type: "Corpus - Catifa i processó",
    time: "Tot el dia",
    done: false
  },
  {
    day: "23",
    month: "Juny",
    place: "La Garriga",
    type: "Flama del Canigó",
    time: "Tarda",
    done: false
  },
  {
    day: "28",
    month: "Juny",
    place: "Sant Pere de Torelló",
    type: "Trobada",
    time: "Tarda",
    done: false
  },
  {
    day: "12",
    month: "Juliol",
    place: "Tordera",
    type: "Trobada",
    time: "Tarda",
    done: false
  },
  {
    day: "25",
    month: "Juliol",
    place: "La Garriga",
    type: "Saligarda",
    time: "Tarda",
    done: false
  },
  {
    day: "31",
    month: "Juliol",
    place: "La Garriga",
    type: "Festa major",
    time: "Tarda",
    done: false
  },
  {
    day: "1",
    month: "Agost",
    place: "La Garriga",
    type: "Festa major",
    time: "A concretar",
    done: false
  },
  {
    day: "3",
    month: "Agost",
    place: "La Garriga",
    type: "Festa major",
    time: "Tot el dia",
    done: false
  },
  {
    day: "6",
    month: "Setembre",
    place: "Beguda Alta",
    type: "Trobada",
    time: "Tarda",
    done: false
  },
  {
    day: "28",
    month: "Setembre",
    place: "Lliçà d'Amunt",
    type: "Trobada comarcal",
    time: "Matí",
    done: false
  },
  {
    day: "11",
    month: "Octubre",
    place: "Fraga",
    type: "Trobada",
    time: "Tarda",
    done: false
  },
  {
    day: "9",
    month: "Novembre",
    place: "Sentmenat",
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
    <Head><title>Calendari 2025</title></Head>
    <StandardPage>
      <Container maxWidth="sm" sx={{mt: 5, mb: 10}} disableGutters>
        <Typography component="h1" variant="h1" gutterBottom sx={{mb: 3}}>Calendari 2025</Typography>
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
          <Button variant="contained" startIcon={<Download />} href="/calendari-2025.pdf" target="_blank">
            Descarregar calendari 2025 en PDF
          </Button>
        </Typography>
      </Container>
    </StandardPage>
  </>;
};

export default Index;
