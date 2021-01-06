import Head from "next/head";
import styles from "../styles/Home.module.css";
import Nav from "../components/Nav";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>しのはら保育園</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className={styles.main}>
          <Nav />
          <div className={styles.grid}>
            <h1 className={styles.title}>
              自分を信じ自立した子ども
              <br />
              思いやりがあり明るく元気な子ども
              <br />
              の育成を目指し保育を行います
            </h1>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.about}>
          
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.logo}>

        </div>
      </div>
      <footer className={styles.footer}></footer>
    </>
  );
}
