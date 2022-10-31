import React from "react";
import Head from "next/head";
import {Container, Divider, Typography} from "@mui/material";

const Index: React.FC = () => {
  return <>
    <Head><title>Història</title></Head>
    <Container maxWidth="md" sx={{mt: 5, mb: 10}}>
      <Typography component="h1" variant="h4" gutterBottom>Història</Typography>
      <Divider sx={{mb: 3}} />
      <p>Els postres gegants van ésser construits per “ EL INGENIO”, per encàrrec del Sr. Salvador Juncosa de Santa Maria de la Geltrú, i cedits a la perròquia.</p>
      <p>Estrenats el 23 de maig del 1940, festivitat de Corpus.</p>
      <p>L´any 1958, amb l´estrena d´uns nous gegants, els antics són venuts a la parròquia de La Garriga, que els incorpora a les festivitats religioses.</p>
      <p>Surten per primer cop a La Garriga el dia 28 de maig de 1959, diada de Corpus.</p>
      <p>No tenim dades de nou fins l´any 1981 que són restaurats pel grup d´animació “ ELS ARTRISTRAS”, i batejats amb els noms de Magí i Xixilona, com a resultat d´una votació popular.</p>
      <p>L´octubre de l´any 1989 es constitueix la colla de geganters que se´n fa càrrec des d´aleshores. Impulsa una segona restauració realitzada per l´escultor Ramón Aumedes, per dotar-los de la comoditat i lleugeresa necessàries per asistir a les diverses trobades arreu de Catalunya. El 10 de juny de 1990, es fa la primera trobada a La Garriga.</p>
      <p>L´any 1991, la colla de geganters, pren l´iniciativa de contruir el gegantó, realitzat també per Ramón Aumedes. S´estrena amb motiu de la segona trobada a la Garriga el dia 9 de juny.</p>
      <p>L´any 1992, coincidint amb la tercera trobada, es bateja el gegantó. Es dirà Benet, que és el nom escollit pels nens del poble el dia 13 de juny.</p>
    </Container>
  </>;
};

export default Index;
