import 'bootstrap/dist/css/bootstrap.css';
import "../styles/globals.css";
import { useEffect } from "react";
import Head from "next/head";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  useEffect(()=>{
    import("bootstrap/dist/js/bootstrap");
  },[])

  return (
    <>
      <Head>
       <title>Grupa radnych WdZ Osiedle Nowe Winogrady Poznań</title>
      </Head>
      
      
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;