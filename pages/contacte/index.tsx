import React from "react";
import Head from "next/head";
import {
  Avatar,
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

const Index: React.FC = () => {
  return <>
    <Head><title>Contacte</title></Head>
    <Container maxWidth="md" sx={{mt: 5, mb: 10}} disableGutters>
      <Typography component="h1" gutterBottom>Contacte</Typography>
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
      </Container>
    </Container>
  </>;
};

export default Index;
