import Head from "next/head";
import styles from "../styles/Home.module.css";
import Nav from "../components/Nav";
import Fotter from "../components/Fotter";

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
      <div className={styles.containerAbout} id="About">
        <div className={styles.about}></div>
      </div>
      <div className={styles.containerDailySchedule} id="DailySchedule">
        <div className={styles.dailySchedule}>
          <div className={styles.backToHome}>
            <a href="/">▲Topに戻る</a>
          </div>
        </div>
      </div>
      <div className={styles.containerFee} id="Fee">
        <div className={styles.Fee}>
          <div className={styles.backToHome}>
            <a href="/">▲Topに戻る</a>
          </div>
        </div>
      </div>
      <Fotter />
    </>
  );
}
