import React from "react";
import {Container, Typography} from "@mui/material";
import Head from "next/head";
import {MDXProvider} from "@mdx-js/react";
import NextLink from "next/link";

const mdxComponents = {
  a: NextLink,
  h1: ({children}: any) => <Typography component="h1" variant="h1" sx={{mb: 4}}>{children}</Typography>,
  h2: ({children}: any) => <Typography component="h2" variant="h2" gutterBottom>{children}</Typography>,
  p: ({children}: any) => <Typography paragraph>{children}</Typography>,
};

type Props = {
  title: string,
  children: React.ReactNode
};

const MarkdownPage: React.FC<Props> = ({title, children}) => {
  // @ts-ignore
  return <MDXProvider components={mdxComponents}>
    <Container maxWidth="md">
      <Head><title>{title}</title></Head>
      {children}
    </Container>
  </MDXProvider>;
};

export default MarkdownPage;
