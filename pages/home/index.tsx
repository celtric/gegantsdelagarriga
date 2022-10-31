import React from "react";
import {Grid} from "@mui/material";
import Welcome from "./Welcome";
import SectionIntro from "./SectionIntro";
import Head from "next/head";
import {pages} from "../../data";

const Home: React.FC = () => {
  return <>
    <Head><title>Gegants de la Garriga</title></Head>
    <Grid container direction="column" spacing={3}>
      <Grid item>
        <Welcome />
      </Grid>
      <Grid item container spacing={4}>
        {pages
          .filter(page => page.description !== undefined)
          .map(page => <SectionIntro key={page.title} {...page} />)}
      </Grid>
    </Grid>
  </>;
};

export default Home;
