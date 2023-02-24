import "../styles/globals.css";
import Header from "../components/Header";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <div className="body_container">
      <Head>
        <link rel="shortcut icon" href="favicon.ico" />
      </Head>
      <Header></Header>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
