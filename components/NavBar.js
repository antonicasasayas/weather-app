/* eslint-disable @next/next/link-passhref */
import styles from '../styles/NavBar.module.css'
import Link from 'next/link'
const NavBar = () => {
    return (
      <div className={styles.container}>
        <Link href="/">
          <h3>Weather</h3>
        </Link>
        <ul className={styles.list}>
          <Link href="/europe">
            <li>Europe</li>
          </Link>
          <Link href="/usa">
            <li>USA</li>
          </Link>
          <Link href="/asia">
            <li>Asia</li>
          </Link>
        </ul>
      </div>
    )
}

export default NavBar
