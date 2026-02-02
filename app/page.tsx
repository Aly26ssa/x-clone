import styles from './page.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Home Page</h1>
      <Link href='/signup'>Sign Up</Link>
      <Link href='/login'>Log In</Link>
    </div>
  );
}
