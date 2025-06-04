import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import Gallery from "../components/Gallery";
import Jumbotron from "../components/Jumotron";


export default function Home() {
  const router = useRouter()
  return (
    <>
    <Head>
      <title>Grupa radnych WdZ Osiedle Nowe Winogrady Północ</title>
      <link rel="icon" href="/images/favicon.ico" />
      <meta name="description" content="winogrady, radni, zarząd, zwycięstwa, wichrowe" />
      </Head>

    <div className={styles.homeMain}>
    <div className={styles.gallery}>
    <Gallery/>
    </div>
    <Jumbotron/>
    
    </div>
    </>
  );
}
