import * as React from "react";
import {Instagram, RssFeed, Twitter} from "@mui/icons-material";
import {Box, Grid, Link, Typography} from "@mui/material";
import {blogLink, instagramLink, twitterLink} from "../data";

const Footer: React.FC = () => {
  return <Box component="footer" sx={{bgcolor: "background.paper", py: 3, my: 4, borderTop: 1, borderColor: "divider"}}>
    <Grid container justifyContent="center" spacing={1}>
      <Grid item>
        <Link href={blogLink} target="_blank"><RssFeed /></Link>
      </Grid>
      <Grid item>
        <Link href={instagramLink} target="_blank"><Instagram /></Link>
      </Grid>
      <Grid item>
        <Link href={twitterLink} target="_blank"><Twitter /></Link>
      </Grid>
    </Grid>
    <Typography variant="h6" align="center" gutterBottom>
      Gegants de la Garriga
    </Typography>
    <Typography variant="body2" color="text.secondary" align="center">
      Copyright © Colla de geganters de la Garriga {new Date().getFullYear()}
    </Typography>
  </Box>;
};

export default Footer;
