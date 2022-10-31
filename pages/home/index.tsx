import React from "react";
import {Grid} from "@mui/material";
import Welcome from "./Welcome";
import SectionIntro from "./SectionIntro";

const sectionIntros = [
  {
    title: "Els gegants",
    description: "Coneix a la Xixilona, en Magí, en Benet, en Garric, en Verdet i en Mussolet!",
    image: "https://pbs.twimg.com/profile_images/835523581333352448/ZUOnACLn_400x400.jpg"
  },
  {
    title: "Calendari",
    description: "Informació de les properes sortides que faran els gegants durant l'any.",
    image: "https://www.fastweb.com/uploads/article_photo/photo/2038752/crop635w_2100628-class-of-23-1270x840.jpg"
  },
  {
    title: "Història",
    description: "Els nostres gegants han viscut una vida interessant durant més de 80 anys, coneix-la!",
    image: "https://2.bp.blogspot.com/-JmcIP5IsiGM/TpS6VaPv-eI/AAAAAAAAABw/VbSYX8KfTGg/s320/000+Postal+dels++anys+50.jpg"
  },
  {
    title: "Contacte",
    description: "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://i.imgur.com/an3j9YW.png"
  }
];

const Home: React.FC = () => {
  return <Grid container direction="column" spacing={2}>
    <Grid item>
      <Welcome />
    </Grid>
    <Grid item container spacing={4}>
      {sectionIntros.map(sectionIntro => <SectionIntro key={sectionIntro.title} {...sectionIntro} />)}
    </Grid>
  </Grid>;
};

export default Home;
