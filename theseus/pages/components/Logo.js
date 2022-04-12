import styles from './Logo.module.css'

function Logo({ category }) {
  function conditionalRender() {
    if (category === 'student')
      return <h1 className={styles.logo_txt}>Θησέας</h1>
    else if (category === 'teacher')
      return (
        <div>
          <h1 className={styles.logo_teacher_txt}>Θησέας</h1>
          <p style={{ fontSize: '14px' }}>teacher edition</p>
        </div>
      )
    else
      return (
        <div>
          <h1 className={styles.logo_teacher_txt}>Θησέας</h1>
          <p style={{ fontSize: '14px' }}>secretary edition</p>
        </div>
      )
  }

  return (
    <div className={styles.logo_ctn}>
      {/* image */}
      <div className={styles.logo_box}>
        <h1 className={styles.logo_ltr}>Θ</h1>
      </div>

      {/* text */}
      {conditionalRender()}
    </div>
  )
}

export default Logo
