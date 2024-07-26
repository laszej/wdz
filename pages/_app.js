import 'bootstrap/dist/css/bootstrap.css';
import "../styles/globals.css";
import { useEffect } from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import Script from 'next/script';


function MyApp({ Component, pageProps }) {
  useEffect(()=>{
    import("bootstrap/dist/js/bootstrap");
  },[])

  return (
   <>
   <chartExample/>
      <Layout>
        
        <Component {...pageProps} />
        
      </Layout>
  
  </>
  );
}

export default MyApp;