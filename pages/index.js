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
          <h1 className={styles.title}>須恵スマートIC前保育園</h1>

          <p className={styles.description}>内閣府所管企業主導型保育園</p>

          <div className={styles.grid}>
            <a href="/posts/About" className={styles.card}>
              <h3>園について</h3>
            </a>
            <a href="/posts/About" className={styles.card}>
              <h3>1日の流れ</h3>
            </a>
            <a href="/posts/About" className={styles.card}>
              <h3>施設紹介</h3>
            </a>
            <a href="/posts/About" className={styles.card}>
              <h3>申請書類</h3>
            </a>
            <a href="/posts/About" className={styles.card}>
              <h3>料金表</h3>
            </a>
            <a href="/posts/About" className={styles.card}>
              <h3>地図</h3>
            </a>
            <a href="/posts/About" className={styles.card}>
              <h3>ロゴについて</h3>
            </a>
            <a href="/posts/About" className={styles.card}>
              <h3>採用</h3>
            </a>
          </div>
        </main>
        　　　
        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{" "}
            <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
          </a>
        </footer>
      </div>
    </div>
  );
}
