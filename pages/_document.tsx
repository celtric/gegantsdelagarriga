import React from "react";
import {Head, Html, Main, NextScript} from "next/document";

// noinspection HtmlRequiredTitleElement
const Document: React.FC = () => <Html>
  <Head>
    <link rel="icon" href="/favicon.png" />
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&family=Libre+Baskerville:wght@400;700&display=swap" rel="stylesheet" />
  </Head>
  <body>
  <Main />
  <NextScript />
  </body>
</Html>;

export default Document;
