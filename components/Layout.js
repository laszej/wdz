import Wdznav from "./Wdznav";
import Footer1 from "./Footer1";
import Head from "next/head";
import CookieBanner from "./CookieBanner";
import { useCookies } from "react-cookie";


const Layout = ({ children }) => {
  return (
    <>
   
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Wdznav/>
      <main style={{ flexGrow: 1 }}>
        {children}
      </main>
     
    </div>
    </>
  );
};

export default Layout;