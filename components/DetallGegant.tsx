import React from "react";
import {Box, Grid, Typography} from "@mui/material";
import Image from "next/image";
import {StaticImageData} from "next/dist/client/image";

type Props = {
  name: string,
  height: string,
  weight: string,
  image: StaticImageData,
  children?: React.ReactNode
};

const DetallGegant: React.FC<Props> = ({name, height, weight, image, children}) => {
  return <Box sx={{p: {xs: 2, md: 4}, pb: 2, mb: 3, bgcolor: "#f6f8fa"}}>
    <Grid container spacing={3}>
      <Grid item xs={12} md={4} sx={{textAlign: {xs: "center", md: undefined}}}>
        <Image src={image} alt={`Fotografia de ${name}`} width={200} height={200} />
      </Grid>
      <Grid item xs={12} md={8}>
        <Typography component="h2" variant="h2">{name}</Typography>
        <Grid container sx={{my: 2}}>
          <Grid item xs><strong>Alçada:</strong> {height}</Grid>
          <Grid item xs><strong>Pes:</strong> {weight}</Grid>
        </Grid>
        {children}
      </Grid>
    </Grid>
  </Box>;
};

export default DetallGegant;
