import Link from "next/link";
import styles from "../styles/Home.module.css";

const Fotter = () => {
  return (
    <div className={styles.containerFotter}>
      <footer className={styles.footer}>
        <Link href='/'><p>須恵ふたば保育園</p></Link>
        <div className={styles.line}>
          <button>LINEでお問い合わせ</button>
        </div>
      </footer>
    </div>
  );
};

export default Fotter;
