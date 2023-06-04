import React from "react";
import Head from "next/head";
import {Box, Container, Divider, Grid, Link, Paper, Typography} from "@mui/material";
import FullSizeImage from "../../../../components/FullSizeImage";
import {DesktopOnly, MobileOnly} from "../../../../responsiveUtils";
import GegantsConvidats from "../../../../public/trobada-2023-gegants.png";
import GegantsConvidatsSmall from "../../../../public/trobada-2023-gegants-small.png";
import Cartell from "../../../../public/cartells-trobades/cartell-trobada-2023.jpg";
import Image from "next/image";
import {Alert, AlertTitle} from "@mui/lab";
import {Celebration} from "@mui/icons-material";

const trobada2023BackgroundColor = "#095577";
const trobada2023BorderColor = "#082e3e";

const Index: React.FC = () => {
  return <>
    <Head><title>XXXII Trobada de gegants de la Garriga</title></Head>
    <DesktopOnly>
      <Box sx={{backgroundColor: trobada2023BackgroundColor, border: `4px solid ${trobada2023BorderColor}`, borderWidth: "4px 0", pt: 3, px: 2, mb: 2}}>
        <Container maxWidth="md" disableGutters sx={{marginBottom: "-74px"}}>
          <FullSizeImage image={GegantsConvidats} alt="Tots els gegants convidats a la trobada"  />
        </Container>
      </Box>
    </DesktopOnly>
    <MobileOnly>
      <Box sx={{borderTop: `4px solid ${trobada2023BorderColor}`, mb: -2}}>
        <Box sx={{"& img": {display: "block", width: "100%", height: "auto"}}}>
          <Image src={GegantsConvidatsSmall} alt="Tots els gegants convidats a la trobada" />
        </Box>
      </Box>
    </MobileOnly>
    <Typography variant="h1" pt={5} mb={[2, 2, 4]} mx={2} align="center">
      XXXII Trobada de gegants de la Garriga
    </Typography>
    <Divider sx={{maxWidth: 70, mx: "auto", my: [3, 3, 4]}} />
    <Box sx={{backgroundColor: "#fff", p: 2, pt: 0}}>
      <Container maxWidth="sm" sx={{pt: [0, 0, 0], pb: [0, 0, 4]}} disableGutters>
        <Alert icon={<Celebration />} sx={{mb: 2}}>
          <AlertTitle><strong>Gràcies a tothom participar!</strong></AlertTitle>
          Ens veiem l&apos;any que ve una altra vegada!
        </Alert>
        <Typography paragraph>
          El proper <strong>dissabte 3 de Juny de 2023</strong> tornarem a sortir als carrers del poble per celebrar la
          trenta-dosena edició de la trobada de gegants de la Garriga!
        </Typography>
        <Typography paragraph>
          Aquest any comptarem amb la participació de les següents colles geganteres:
        </Typography>
        <Grid container>
          <Grid item xs={12} sm="auto">
            <ul style={{margin: 0}}>
              <li><Link href="https://www.facebook.com/profile.php?id=100004278633913" target="_blank">Les Borges del Camps</Link></li>
              <li><Link href="https://www.instagram.com/gegants_poble_nou_manresa/" target="_blank">Manresa (Poble Nou)</Link></li>
              <li>Olesa de Montserrat</li>
            </ul>
          </Grid>
          <Grid item xs={12} sm="auto">
            <ul style={{margin: 0}}>
              <li><Link href="https://www.facebook.com/gegantsdesanthilarisacalm/" target="_blank">Sant Hilari de Sacalm</Link></li>
              <li><Link href="http://webs.gegants.cat/castelltersol/" target="_blank">Castellterçol</Link></li>
              <li><Link href="https://www.facebook.com/profile.php?id=100081255793537" target="_blank">Aiguafreda</Link></li>
            </ul>
          </Grid>
          <Grid item xs={12} sm="auto">
            <ul style={{margin: 0}}>
              <li>Gualba</li>
              <li><Link href="https://www.facebook.com/gegantsdepiera/" target="_blank">Piera</Link></li>
            </ul>
          </Grid>
        </Grid>
        <Box sx={{backgroundColor: "#f6f8fa", p: 2, my: 3, textAlign: "center"}}>
          Gràcies per acompanyar-nos en aquesta edició!
        </Box>
        <Typography paragraph>
          La duració total de la trobada serà d&apos;unes 2 hores i mitja aproximadament. Les colles participants
          a més disposaran del sopar de germanor a Can Luna. Els horaris seran els següents:
        </Typography>
        <Paper sx={{p: 3, mb: 4}}>
          <Divider sx={{fontWeight: "bold", mb: 2}}>17:30 Plantada</Divider>
          <Typography paragraph>
            Totes les colles plantaran el gegants a la <strong>plaça de Can Dachs</strong>, i es podran veure durant
            aproximadament 30 minuts.
          </Typography>
          <Divider sx={{fontWeight: "bold", mb: 2}}>18h Inici cercavila</Divider>
          <Typography paragraph>
            Iniciarem la cercavila, fent un recorregut circular d&apos;aproximadament 1,4 km.
          </Typography>
          <Typography paragraph>
            A continuació us compartim el recorregut a Google Maps, així com les ubicacions d&apos;interès per les
            colles participants (punts de color negre):
          </Typography>
          <iframe src="https://www.google.com/maps/d/embed?mid=1Wa8lUqe3Wv_fl38U-Ta3clPQ_WvEytg&ehbc=2E312F&z=16" width="100%" height="480" style={{border: "none"}}></iframe>
          <Typography paragraph mt={2} sx={{fontStyle: "italic"}}>
            En cas de no disposar de Google Maps, també podeu <Link href="/trobada-2023-recorregut.pdf" target="_blank">baixar
            el recorregut en PDF</Link>.
          </Typography>
          <Divider sx={{fontWeight: "bold", my: 2}}>19:30 Balls de plaça</Divider>
          <Typography paragraph>
            Acabarem la trobada amb els balls de plaça de cada colla gegantera, a la <strong>plaça de
            l&apos;Ajuntament</strong>.
          </Typography>
          <Divider sx={{fontWeight: "bold", my: 2}}>21:00 Sopar colles</Divider>
          <Typography paragraph>
            Finalment, les colles participants disposaran del sopar amb música a <strong>Can Luna</strong>.
          </Typography>
        </Paper>
        <Link href="/cartells-trobades/cartell-trobada-2023.jpg" target="_blank">
          <FullSizeImage image={Cartell} alt="Cartell de la trobada de 2023" />
        </Link>
      </Container>
    </Box>
  </>;
};

export default Index;
