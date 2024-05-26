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
import CartellTrobada2024 from "../../public/cartells-trobades/cartell-trobada-2024.png";
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
    day: "27",
    month: "Gener",
    place: "Mataró - La Llàntia",
    type: "Trobada",
    time: "Tarda",
    done: true
  },
  {
    day: "9",
    month: "Febrer",
    place: "La Garriga",
    type: "Festa major Escola Els Pinetons",
    time: "Tarda",
    done: true
  },
  {
    day: "18",
    month: "Febrer",
    place: "La Garriga",
    type: "Ballada de gitanes",
    time: "Matí",
    done: true
  },
  {
    day: "24",
    month: "Febrer",
    place: "Granollers",
    type: "Cursa de gegants",
    time: "Tarda",
    done: true
  },
  {
    day: "2",
    month: "Març",
    place: "La Garriga",
    type: "Fira de la botifarra",
    time: "Matí",
    done: true
  },
  {
    day: "9",
    month: "Març",
    place: "La Garriga",
    type: "Saligarda",
    time: "Tarda",
    done: true
  },
  {
    day: "14",
    month: "Abril",
    place: "La Garriga",
    type: "Tres Tombs",
    time: "Matí",
    done: true
  },
  {
    day: "20",
    month: "Abril",
    place: "La Garriga",
    type: "Baixada Verge",
    time: "Nit",
    done: true
  },
  {
    day: "21",
    month: "Abril",
    place: "La Garriga - Puiggraciós",
    type: "Aplec de Puiggraciós",
    time: "Matí",
    done: true
  },
  {
    day: "1",
    month: "Maig",
    place: "Vilassar de Dalt",
    type: "Trobada",
    time: "Matí",
    done: true
  },
  {
    day: "19",
    month: "Maig",
    place: "Sta. Eulàlia de Ronçana",
    type: "Trobada",
    time: "Matí",
    done: true
  },
  {
    day: "25",
    month: "Maig",
    place: "La Garriga",
    type: "XXXIII Trobada de gegants",
    time: "Tarda",
    done: true
  },
  {
    day: "1",
    month: "Juny",
    place: "La Garriga",
    type: "Cercavila infantil",
    time: "Tarda",
    done: false
  },
  {
    day: "2",
    month: "Juny",
    place: "La Garriga",
    type: "Corpus",
    time: "Tot el dia",
    done: false
  },
  {
    day: "23",
    month: "Juny",
    place: "Coll d'Ares",
    type: "Flama del Canigó",
    time: "Tot el dia",
    done: false
  },
  {
    day: "29",
    month: "Juny",
    place: "Abrera",
    type: "Trobada",
    time: "Tarda",
    done: false
  },
  {
    day: "20",
    month: "Juliol",
    place: "Thuir",
    type: "Trobada",
    time: "Tarda",
    done: false
  },
  {
    day: "27",
    month: "Juliol",
    place: "La Garriga",
    type: "Saligarda",
    time: "Tarda",
    done: false
  },
  {
    day: "1-4",
    month: "Agost",
    place: "La Garriga",
    type: "Festa major",
    time: "A concretar",
    done: false
  },
  {
    day: "8",
    month: "Setembre",
    place: "Vilobí d'Onyar",
    type: "Trobada",
    time: "Matí",
    done: false
  },
  {
    day: "29",
    month: "Setembre",
    place: "Taradell",
    type: "Trobada",
    time: "Matí",
    done: false
  },
  {
    day: "20",
    month: "Octubre",
    place: "St. Llorenç Savall",
    type: "Trobada",
    time: "Matí",
    done: false
  },
  {
    day: "10",
    month: "Novembre",
    place: "Teià",
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
    <Head><title>Calendari 2024</title></Head>
    <StandardPage>
      <Container maxWidth="sm" sx={{mt: 5, mb: 10}} disableGutters>
        <Typography component="h1" variant="h1" gutterBottom sx={{mb: 3}}>Calendari 2024</Typography>
        <FullSizeImage image={CartellTrobada2024} alt="Cartell de la trobada de 2024" mb={0} width={600} />
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
          <Button variant="contained" startIcon={<Download />} href="/calendari-2024.pdf" target="_blank">
            Descarregar calendari 2024 en PDF
          </Button>
        </Typography>
      </Container>
    </StandardPage>
  </>;
};

export default Index;
