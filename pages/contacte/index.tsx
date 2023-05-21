import React from "react";
import Head from "next/head";
import {
  Avatar, Box,
  Container,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Typography
} from "@mui/material";
import {Instagram, Link, Twitter} from "@mui/icons-material";
import NextLink from "next/link";
import {blogLink, instagramLink, twitterLink} from "../../data";
import StandardPage from "../../components/StandardPage";

const Index: React.FC = () => {
  return <>
    <Head><title>Contacte</title></Head>
    <StandardPage>
      <Container maxWidth="md" sx={{mt: 5, mb: 10}} disableGutters>
        <Typography component="h1" variant="h1" gutterBottom>Contacte</Typography>
        <Container maxWidth="xs" disableGutters>
          <List>
            <ListItem>
              <ListItemButton component={NextLink} href={blogLink} target="_blank">
                <ListItemAvatar>
                  <Avatar>
                    <Link />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Blog" secondary="gegantsdelagarriga.blogspot.com" />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton component={NextLink} href={instagramLink} target="_blank">
                <ListItemAvatar>
                  <Avatar>
                    <Instagram />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="@gegantsdelagarriga" secondary="Instagram" />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton component={NextLink} href={twitterLink} target="_blank">
                <ListItemAvatar>
                  <Avatar>
                    <Twitter />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="@gegantsgarriga" secondary="Twitter" />
              </ListItemButton>
            </ListItem>
          </List>
          <Box textAlign="center">
            <Typography sx={{fontWeight: "bold"}}>Cap de colla</Typography>
            <Typography gutterBottom>Lluís Paris</Typography>
            <Typography sx={{fontWeight: "bold"}}>Cap de comunicació</Typography>
            <Typography gutterBottom>Joan Tarradas</Typography>
            <Typography sx={{fontWeight: "bold"}}>Telèfon mòbil</Typography>
            <Typography gutterBottom>618 474 135</Typography>
            <Typography sx={{fontWeight: "bold"}}>Adreça electrònica colla</Typography>
            <Typography gutterBottom>gegantsdelagarriga@gmail.com</Typography>
            <Typography sx={{fontWeight: "bold"}}>Adreça electrònica comunicació</Typography>
            <Typography gutterBottom>joan.tarradas2@gmail.com</Typography>
            <Typography sx={{fontWeight: "bold"}}>Adreça</Typography>
            <Typography gutterBottom>C/ Consell, 46, 08530 La Garriga</Typography>
          </Box>
        </Container>
      </Container>
    </StandardPage>
  </>;
};

export default Index;
