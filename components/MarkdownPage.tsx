import React from "react";
import {Container, Typography} from "@mui/material";
import Head from "next/head";
import {MDXProvider} from "@mdx-js/react";
import StandardPage from "./StandardPage";

const mdxComponents = {
  h1: ({children}: any) => <Typography component="h1" variant="h1" sx={{mb: 4}}>{children}</Typography>,
  h2: ({children}: any) => <Typography component="h2" variant="h2" gutterBottom>{children}</Typography>,
  p: ({children}: any) => <Typography paragraph>{children}</Typography>,
};

type Props = {
  title: string,
  children: React.ReactNode
};

const MarkdownPage: React.FC<Props> = ({title, children}) => {
  return <MDXProvider components={mdxComponents}>
    <StandardPage>
      <Container maxWidth="md">
        <Head><title>{title}</title></Head>
        {children}
      </Container>
    </StandardPage>
  </MDXProvider>;
};

export default MarkdownPage;
