import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from '../src/components/layouts/Navbar'
import Headshot from "../public/headshot.jpg"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Eric Velez - Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
       
    </div>
  );
}
