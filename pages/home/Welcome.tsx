import * as React from "react";
import {Avatar, Box, Grid, Link, Typography} from "@mui/material";
import {blogLink, instagramLink, twitterLink} from "../../data";

const Welcome: React.FC = () => {
  return <Box sx={{p: 5, pb: 2, bgcolor: "grey.200", borderRadius: 1}}>
    <Grid container spacing={5}>
      <Grid item xs>
        <Typography component="h1" variant="h4" color="" gutterBottom>
          Benvinguts i benvingudes!
        </Typography>
        <Typography variant="body1" color="inherit" paragraph>
          En aquesta pàgina intentarem donar-vos resposta a les preguntes que pogueu tenir: qui són els gegants de la
          Garriga, com es diuen, quina és la seva història, on els podeu veure... I també ens podeu seguir
          a <Link href={instagramLink} target="_blank">Instagram</Link>,
          a <Link href={twitterLink} target="_blank">Twitter</Link> i al
          nostre <Link href={blogLink} target="_blank">blog</Link> per conèixer les últimes novetats. Benvinguts i
          benvingudes!
        </Typography>
      </Grid>
      <Grid item>
        <Avatar
          src="https://pbs.twimg.com/profile_images/835523581333352448/ZUOnACLn_400x400.jpg"
          sx={{height: 150, width: 150, m: -2}} />
      </Grid>
    </Grid>
  </Box>;
};

export default Welcome;
