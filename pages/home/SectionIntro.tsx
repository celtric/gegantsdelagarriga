import * as React from "react";
import {Card, CardActionArea, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import NextLink from "next/link";

type Props = {
  title: string,
  route: string,
  description?: string,
  image?: string
};

const SectionIntro: React.FC<Props> = ({title, route, description, image}) => {
  return <Grid item xs={12} md={6}>
    <CardActionArea component={NextLink} href={route}>
      <Card sx={{display: "flex"}} variant="outlined">
        <CardContent sx={{flex: 1}}>
          <Typography component="h2" variant="h5" gutterBottom>
            {title}
          </Typography>
          <Typography variant="subtitle1">
            {description}
          </Typography>
          <Typography variant="subtitle1" color="primary">
            Seguir llegint...
          </Typography>
        </CardContent>
        <CardMedia
          component="img"
          sx={{width: 160, height: 160, display: {xs: "none", sm: "block"}}}
          image={image} />
      </Card>
    </CardActionArea>
  </Grid>;
};

export default SectionIntro;
