import styles from './page.module.css';
import SignUpPage from './signup/page';

export default function Home() {
  return (
    <div className={styles.page}>
      <SignUpPage />
    </div>
  );
}
