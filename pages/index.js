// index.js
import Link from 'next/link';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router';
import Wdznav from '../components/Wdznav';


export default function Home() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Wdz app</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className={styles.homeMain}>
        
        <div className={styles.gallery}></div>
        
      </div>
    </>
  );
}
