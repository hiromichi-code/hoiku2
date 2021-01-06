import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.containerChild}>
        <Head>
          <title>しのはら保育園</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
          <div className={styles.navbar}>
            <ul>
              <Link href="/posts/DailySchedule">
                <a className={styles.nav}>
                  <li>1日の流れ</li>
                </a>
              </Link>
              <Link href="/posts/FacilityIntroduction">
                <a className={styles.nav}>
                  <li>施設紹介</li>
                </a>
              </Link>
              <Link href="/posts/Documents">
                <a className={styles.nav}>
                  <li>申請書類</li>
                </a>
              </Link>
              <Link href="/posts/Fee">
                <a className={styles.nav}>
                  <li>料金表</li>
                </a>
              </Link>
              <Link href="/posts/Map">
                <a className={styles.nav}>
                  <li>地図</li>
                </a>
              </Link>
              <Link href="/posts/Recruitment">
                <a className={styles.nav}>
                  <li>採用</li>
                </a>
              </Link>
            </ul>
          </div>
          <div className={styles.grid}>
            <h1 className={styles.title}>須恵スマートIC前保育園</h1>

            <p className={styles.description}>内閣府所管企業主導型保育園</p>
          </div>
        </main>
        　　　
      </div>
      <footer className={styles.footer}></footer>
    </div>
  );
}
