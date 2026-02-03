'use client';
import styles from './HomePage.module.scss';
import RightSidebar from '../RightSidebar';

const HomePage = () => {
    return (
        <div className={styles.container}>
            <RightSidebar />
        </div>
    )
}

export default HomePage;