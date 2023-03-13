import React from "react";
// eslint-disable-next-line
import { Helmet } from "react-helmet";

export default function HomePage() {
  return (
    <div>
      <Helmet>
        {/* <title>My Title</title> */}
        <meta property="title" content="Explain AI" />
        <meta property="og:description" content="og:Explain it to me. Simply." />
      </Helmet>
      <h1>Homepage</h1>
      <a href="/javascript">javascript</a>
    </div>
  );
}
