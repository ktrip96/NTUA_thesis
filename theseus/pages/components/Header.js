import Logo from './Logo'
import ProfileImage from './ProfileImage'
import styles from './Header.module.css'

function Header() {
  return (
    <div className={styles.header}>
      <Logo />
      <div style={{ flexGrow: 1 }}></div>
      <ProfileImage />
    </div>
  )
}

export default Header
