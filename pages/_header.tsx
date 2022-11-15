import * as React from "react";
import {useState} from "react";
import {Box, Container, Link, ListItemIcon, ListItemText, MenuItem, MenuList, Toolbar, Typography} from "@mui/material";
import NextLink from "next/link";
import {useRouter} from "next/router";
import {pages} from "../data";
import {Close, Menu} from "@mui/icons-material";
import LogoColla from "../public/logo-colla.jpg";

const Header: React.FC = () => {
  const router = useRouter();
  const [isMobileMenuVisible, toggleMobileMenu] = useState(false);
  return <>
    <Box component="header" sx={{bgcolor: "#fff"}}>
      <Container maxWidth="lg" disableGutters>
        <Toolbar sx={{
          backgroundImage: `url('${LogoColla.src}')`,
          backgroundPosition: {xs: "10px center", md: "center 20px"},
          backgroundRepeat: "no-repeat",
          backgroundSize: {xs: "auto 70%", md: "auto 80px"},
          pb: {
            xs: 3,
            md: 3
          },
          pt: {
            xs: 3,
            md: 14
          }
        }}>
          <Typography variant="h1" align="center" sx={{flex: 1}}>
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
          ? <Typography key={page.title} variant="body1" sx={{fontWeight: 700, fontFamily: "Roboto"}}>
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
            sx={{p: 1, flexShrink: 0, fontFamily: "Roboto"}}>{page.title}</Link>)}
      </Toolbar>
      <MenuList sx={{display: {xs: "block", md: "none"}, textAlign: "center"}} disablePadding>
        <MenuItem divider onClick={() => toggleMobileMenu(!isMobileMenuVisible)}>
          <ListItemIcon sx={{textAlign: "center"}}>
            {!isMobileMenuVisible && <Menu />}
            {isMobileMenuVisible && <Close />}
          </ListItemIcon>
          <ListItemText primaryTypographyProps={{fontWeight: 700, marginLeft: -5}}>
            {!isMobileMenuVisible && pages.find(page => page.route === router.route)?.title}
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
              primaryTypographyProps={{fontWeight: page.route === router.route ? 700 : undefined}} />
          </MenuItem>)}
      </MenuList>
    </Container>
  </>;
};

export default Header;
