import Head from "next/head";
import styles from "../styles/Home.module.css";
import Nav from '../components/Nav';

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerChild}>
          <Head>
            <title>しのはら保育園</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <main className={styles.main}>
            <Nav />
            <div className={styles.grid}>
              <h1 className={styles.title}>須恵ふたば保育園</h1>
              <p className={styles.description}>内閣府所管企業主導型保育園</p>
            </div>
          </main>
        </div>
      </div>
      <footer className={styles.footer}></footer>
    </>
  );
}
