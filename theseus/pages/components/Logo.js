import styles from './Logo.module.css'

function Logo() {
  return (
    <div className={styles.logo_ctn}>
      {/* image */}
      <div className={styles.logo_box}>
        <h1 className={styles.logo_ltr}>Θ</h1>
      </div>

      {/* text */}
      <h1 className={styles.logo_txt}>Θησέας</h1>
    </div>
  )
}

export default Logo
