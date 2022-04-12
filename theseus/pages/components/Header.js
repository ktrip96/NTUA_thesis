import Logo from './Logo'
import ProfileImage from './ProfileImage'
import styles from './Header.module.css'

function Header({ category }) {
  return (
    <div className={styles.header}>
      <Logo category={category} />
      <div style={{ flexGrow: 1 }}></div>
      <ProfileImage />
    </div>
  )
}

export default Header
