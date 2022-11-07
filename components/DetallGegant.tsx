import React from "react";
import {Box, Grid, Typography} from "@mui/material";
import Image from "next/image";

type Props = {
  name: string,
  height: string,
  weight: string,
  photo: string,
  petit?: boolean,
  children?: React.ReactNode
};

const DetallGegant: React.FC<Props> = ({name, height, weight, photo, petit, children}) => {
  return <Box sx={{p: 4, pb: 2, mb: 3, bgcolor: "#f6f8fa"}}>
    <Grid container spacing={3}>
      <Grid item>
        <Image src="/gegants-de-la-garriga.jpg" alt={`Fotografia de ${name}`} width={200} height={200} />
        {/*<img src={photo} alt={`Fotografia de ${name}`} width={200} height={200} />*/}
      </Grid>
      <Grid item xs>
        <Typography component="h2" variant="h2">{name}</Typography>
        <Grid container direction={petit ? "column" : "row"} sx={{my: 2}}>
          <Grid item xs><strong>Alçada:</strong> {height}</Grid>
          <Grid item xs><strong>Pes:</strong> {weight}</Grid>
        </Grid>
        {children}
      </Grid>
    </Grid>
  </Box>;
};

export default DetallGegant;
