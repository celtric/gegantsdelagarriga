import * as React from "react";
import {Box, Container, Link, Toolbar, Typography} from "@mui/material";
import NextLink from "next/link";
import {useRouter} from "next/router";
import {pages} from "../data";
import {headerFont} from "../theme";

const Header: React.FC = () => {
  const router = useRouter();
  return <>
    <Box component="header" sx={{bgcolor: "#fff"}}>
      <Container maxWidth="lg">
        <Toolbar sx={{
          backgroundImage: "url('https://i.imgur.com/w1bT6Dl.png'), url('https://i.imgur.com/1BytJRn.png')",
          backgroundPosition: "left bottom, right 10px center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "auto 100px, auto 60px",
          pb: 2,
          pt: 5
        }}>
          <Typography component="h2" variant="h4" align="center" sx={{flex: 1}}>
            Gegants de la Garriga
          </Typography>
        </Toolbar>
      </Container>
    </Box>
    <Container maxWidth="lg">
      <Toolbar
        component="nav"
        sx={{justifyContent: "space-around"}}>
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
    </Container>
  </>;
};

export default Header;
