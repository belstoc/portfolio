import Link from 'next/link'
import styles from '../../../styles/Home.module.css'

function Navbar (){
    return (
      <div className={styles.navbar}>
        <div className={styles.title}>
          <h1>ERIC VELEZ</h1>
        </div>
        <div className={styles.navList}>
          <ul className={styles.ul}>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    );
}
export default Navbar