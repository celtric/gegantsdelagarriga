import React from "react";
import Head from "next/head";
import {Button, Card, CardActions, CardContent, CardMedia, Container, Divider, Grid, Typography} from "@mui/material";

const Index: React.FC = () => {
  return <>
    <Head><title>Calendari</title></Head>
    <Container maxWidth="md" sx={{mt: 5, mb: 10}} disableGutters>
      <Typography component="h1" variant="h4" gutterBottom>Calendari</Typography>
      <Grid container direction="column" spacing={5} alignItems="center">
        <Grid item>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image="https://i.imgur.com/oT1j3o1.png"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Sant Esteve de Palautordera &middot; 30 Octubre 2022
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pharetra bibendum massa sed lobortis.
                Donec id leo non odio imperdiet commodo id vel mauris. Aliquam vulputate scelerisque dui, sit amet
                ultrices lacus vestibulum eu. Nam consectetur arcu eget venenatis egestas. Aliquam at vehicula augue.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed vitae lacus
                ipsum.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Pàgina oficial de la trobada</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item container spacing={5}>
          {[0, 1].map(n => <Grid key={n} item>
            <Card sx={{maxWidth: 400}}>
              <CardMedia
                component="img"
                height="140"
                image="https://i.imgur.com/oT1j3o1.png"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Sant Esteve de Palautordera &middot; 30 Octubre 2022
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pharetra bibendum massa sed lobortis.
                  Donec id leo non odio imperdiet commodo id vel mauris.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Pàgina oficial de la trobada</Button>
              </CardActions>
            </Card>
          </Grid>)}
        </Grid>
      </Grid>
    </Container>
  </>;
};

export default Index;
