import * as React from "react";
import {Link, Toolbar, Typography} from "@mui/material";
import NextLink from "next/link";
import {useRouter} from "next/router";
import {pages} from "../data";

const Header: React.FC = () => {
  const router = useRouter();
  console.log(router);
  return <header>
    <Toolbar sx={{
      pb: 2,
      pt: 5,
      backgroundImage: "url('https://i.imgur.com/w1bT6Dl.png')",
      backgroundPosition: "left bottom",
      backgroundRepeat: "no-repeat",
      backgroundSize: "auto 100px"
    }}>
      <Typography component="h2" variant="h4" align="center" sx={{flex: 1}}>
        Gegants de la Garriga
      </Typography>
    </Toolbar>
    <Toolbar
      component="nav"
      variant="dense"
      sx={{justifyContent: "space-between", borderBottom: 1, borderTop: 1, borderColor: "divider", mb: 3}}>
      {pages.map(page => page.route === router.route
        ? <Typography key={page.title} variant="body1" sx={{fontWeight: "bold"}}>{page.title}</Typography>
        : <Link
          component={NextLink}
          color="inherit"
          noWrap
          key={page.title}
          variant="body1"
          href={page.route}
          underline="hover"
          sx={{p: 1, flexShrink: 0}}>{page.title}</Link>)}
    </Toolbar>
  </header>;
};

export default Header;
