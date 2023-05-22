import React from "react";
import {Box, Container} from "@mui/material";

type Props = {
  children: React.ReactNode
};

const StandardPage: React.FC<Props> = ({children}) => {
  return <Box component="main" sx={{bgcolor: "#fff", p: 1, "& img": {maxWidth: "100%"}}}>
    <Container maxWidth="lg" sx={{mt: {xs: 2, md: 5}, mb: {xs: 5, md: 10}}}>
      {children}
    </Container>
  </Box>;
};

export default StandardPage;
