'use client';
import styles from './HomePage.module.scss';
import LeftSidebar from '../LeftSidebar';
import RightSidebar from '../RightSidebar';

const HomePage = () => {
    return (
        <div className={styles.container}>
            <LeftSidebar avatarUrl={'https://avatars.githubusercontent.com/u/201373379?s=400&u=711e117beb0d356e837ddaa61a5ca7a996ec6dc4&v=4'} />
            <RightSidebar />
        </div>
    )
}

export default HomePage;