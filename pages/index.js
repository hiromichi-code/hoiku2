import Head from "next/head";
import styles from "../styles/Home.module.css";
import Nav from "../components/Nav";
import Fotter from '../components/Fotter';

export default function Home() {
  return (
    <>
      <Head>
        <title>須恵ふたば保育園</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.containerMain}>
        <div className={styles.headerOut}>
          <div className={styles.header}>
            <Nav />
          </div>
        </div>
        <div className={styles.main}>
          <div className={styles.grid}>
            <h1 className={styles.title}>
              自分を信じ自立した子ども
              <br />
              思いやりがあり明るく元気な子ども
            </h1>
          </div>
        </div>
      </div>
      <div className={styles.containerMap}>
        <div className={styles.map}></div>
      </div>
      <div className={styles.containerLogo}>
        <div className={styles.logo}></div>
      </div>
      <Fotter />
    </>
  );
}
