import Link from "next/link";
import styles from "../styles/Home.module.css";

const Nav = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logoImg}>
        <Link href="/">
          <p>ロゴ</p>
        </Link>
      </div>
      <ul>
        <Link href="/#About">
          <a className={styles.nav}>
            <li>園について</li>
          </a>
        </Link>
        <Link href="/#DailySchedule">
          <a className={styles.nav}>
            <li>1日のながれ</li>
          </a>
        </Link>
        <Link href="/#Fee">
          <a className={styles.nav}>
            <li>料金表</li>
          </a>
        </Link>
        <Link href="/posts/Documents">
          <a className={styles.nav}>
            <li>書式ダウンロード</li>
          </a>
        </Link>
        <Link href="/posts/Recruitment">
          <a className={styles.nav}>
            <li>採用</li>
          </a>
        </Link>
      </ul>
      <div className={styles.line}>
        <button>LINEでお問い合わせ</button>
      </div>
    </div>
  );
};

export default Nav;
