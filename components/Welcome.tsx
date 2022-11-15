import * as React from "react";
import {Box, Link, Typography} from "@mui/material";
import {blogLink, instagramLink, twitterLink} from "../data";

const Welcome: React.FC = () => {
  return <Box sx={{p: {xs: 2, md: 5}, pb: {xs: 1, md: 2}, bgcolor: "aliceblue", borderRadius: 1}}>
    <Typography component="h1" variant="h1" gutterBottom>
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
  </Box>;
};

export default Welcome;
