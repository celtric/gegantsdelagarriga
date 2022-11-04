import * as React from "react";
import {useState} from "react";
import {Box, Container, Link, ListItemIcon, ListItemText, MenuItem, MenuList, Toolbar, Typography} from "@mui/material";
import NextLink from "next/link";
import {useRouter} from "next/router";
import {pages} from "../data";
import {headerFont} from "../theme";
import {Close, Menu} from "@mui/icons-material";

const Header: React.FC = () => {
  const router = useRouter();
  const [isMobileMenuVisible, toggleMobileMenu] = useState(false);
  return <>
    <Box component="header" sx={{bgcolor: "#fff"}}>
      <Container maxWidth="lg" disableGutters>
        <Toolbar sx={{
          backgroundImage: {
            md: "url('https://i.imgur.com/w1bT6Dl.png'), url('https://i.imgur.com/1BytJRn.png')"
          },
          backgroundPosition: "left bottom, right 10px center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "auto 100px, auto 60px",
          pb: 2,
          pt: {
            md: 5,
            xs: 3
          }
        }}>
          <Typography component="h2" variant="h4" align="center" sx={{flex: 1}}>
            Gegants de la Garriga
          </Typography>
        </Toolbar>
      </Container>
    </Box>
    <Container maxWidth="lg" disableGutters>
      <Toolbar
        component="nav"
        sx={{justifyContent: "space-around", display: {xs: "none", md: "flex"}}}>
        {pages.map(page => page.route === router.route
          ? <Typography key={page.title} variant="body1" sx={{fontWeight: "bold", fontFamily: headerFont}}>
            {page.title}
          </Typography>
          : <Link
            component={NextLink}
            color="inherit"
            noWrap
            key={page.title}
            variant="body1"
            href={page.route}
            underline="hover"
            sx={{p: 1, flexShrink: 0, fontFamily: headerFont}}>{page.title}</Link>)}
      </Toolbar>
      <MenuList sx={{display: {xs: "block", md: "none"}, textAlign: "center"}} disablePadding>
        <MenuItem divider onClick={() => toggleMobileMenu(!isMobileMenuVisible)}>
          <ListItemIcon sx={{textAlign: "center"}}>
            {!isMobileMenuVisible && <Menu />}
            {isMobileMenuVisible && <Close />}
          </ListItemIcon>
          <ListItemText primaryTypographyProps={{fontWeight: "bold", marginLeft: -5}}>
            {!isMobileMenuVisible && pages.find(page => page.route === router.route)!.title}
          </ListItemText>
        </MenuItem>
      </MenuList>
      <MenuList
        sx={{
          display: {xs: isMobileMenuVisible ? "block" : "none", md: "none"},
          textAlign: "center"
        }}
        disablePadding>
        {pages.map(page =>
          <MenuItem key={page.title} divider component={NextLink} href={page.route} onClick={() => toggleMobileMenu(false)}>
            <ListItemText
              primary={page.title}
              primaryTypographyProps={{fontWeight: page.route === router.route ? "bold" : undefined}} />
          </MenuItem>)}
      </MenuList>
    </Container>
  </>;
};

export default Header;
