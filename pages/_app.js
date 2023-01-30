import "../styles/globals.css";
import Head from "next/head";
import Header from "../components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <div className="body_container">
      <Head>
        <title> Anime Site</title>
        <link rel="icon" type="image/x-icon" href="/public/favicon.ico" />
      </Head>
      <Header></Header>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
