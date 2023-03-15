import React, {useState} from "react";
import Head from "next/head";
import {
  Container,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  Paper,
  Typography
} from "@mui/material";
import {ArrowRight, Close, KeyboardArrowRight, Menu} from "@mui/icons-material";
import NextLink from "next/link";
import {MDXProvider} from "@mdx-js/react";
import {racoGeganterPages} from "../data";

const mdxComponents = {
  h1: ({children}: any) => <Typography component="h1" variant="h1" sx={{mb: 4}}>{children}</Typography>,
  h2: ({children}: any) => <Typography component="h2" variant="h2" sx={{my: 3}}>{children}</Typography>,
  p: ({children}: any) => <Typography paragraph>{children}</Typography>,
};

type Props = {
  title: string,
  selectedRoute: string,
  children: React.ReactNode
};

const RacoGeganter: React.FC<Props> = ({title, selectedRoute, children}) => {
  const [isMobileMenuVisible, toggleMobileMenu] = useState(false);
  return <MDXProvider components={mdxComponents}>
    <Head><title>{title}</title></Head>
    <Container maxWidth="lg" disableGutters>
      <Grid container spacing={4}>
        <Grid item xs={12} md={0} lg={1} sx={{display: {xs: "none", lg: "inherit"}}} />
        <Grid item xs={12} md={4} lg={3} sx={{borderRight: {md: "8px solid #f6f8fa"}}}>
          <Paper sx={{display: {xs: "block", md: "none"}, textAlign: "center"}}>
            <MenuList disablePadding>
              <MenuItem onClick={() => toggleMobileMenu(!isMobileMenuVisible)}>
                <ListItemIcon sx={{textAlign: "center"}}>
                  {!isMobileMenuVisible && <Menu />}
                  {isMobileMenuVisible && <Close />}
                </ListItemIcon>
                <ListItemText primaryTypographyProps={{fontWeight: 700, marginLeft: -5}}>
                  {title}
                </ListItemText>
              </MenuItem>
            </MenuList>
          </Paper>
          <List sx={{display: {xs: isMobileMenuVisible ? "block" : "none", md: "block"}}}>
            {racoGeganterPages.map((page, index) => <React.Fragment key={index}>
              {page.route && page.route !== selectedRoute && <ListItemButton
                component={NextLink}
                href={page.route}
                sx={{"&:hover": {backgroundColor: "#f6f8fa", textDecoration: "underline"}}}>
                {page.indented && <ListItemIcon sx={{ml: 1, mr: -3}}><KeyboardArrowRight /></ListItemIcon>}
                <ListItemText>{page.name}</ListItemText>
              </ListItemButton>}
              {page.route && page.route === selectedRoute && <ListItem sx={{backgroundColor: "#f6f8fa"}}>
                {page.indented && <ListItemIcon sx={{ml: 1, mr: -3}}><KeyboardArrowRight /></ListItemIcon>}
                <ListItemText sx={{"*": {fontWeight: "bold !important"}}}>{page.name}</ListItemText>
                <ListItemIcon sx={{mr: -5, color: "#000", display: {xs: "none", md: "block"}}}><ArrowRight /></ListItemIcon>
              </ListItem>}
              {!page.route && <ListItem>
                <ListItemText>{page.name}:</ListItemText>
              </ListItem>}
            </React.Fragment>)}
          </List>
        </Grid>
        <Grid item xs={12} md={8}>
          {children}
        </Grid>
      </Grid>
    </Container>
  </MDXProvider>;
};

export default RacoGeganter;
