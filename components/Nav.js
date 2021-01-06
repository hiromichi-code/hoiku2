import Link from "next/link";
import styles from "../styles/Home.module.css";

const Nav = () => {
  return (
    <div className={styles.navbar}>
      <ul>
        <Link href="/posts/FacilityIntroduction">
          <a className={styles.nav}>
            <li>施設紹介</li>
          </a>
        </Link>
        <Link href="/posts/DailySchedule">
          <a className={styles.nav}>
            <li>1日のながれ</li>
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
  );
};

export default Nav;
