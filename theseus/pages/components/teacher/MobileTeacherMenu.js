import styles from './MobileTeacherMenu.module.css'

function MobileTeacherMenu({ isActive, setIsActive }) {
  return (
    <div className={styles.menu_ctn}>
      <div onClick={() => setIsActive(1)}>
        <h2
          className={
            isActive === 1
              ? [styles.menu_box_selected, styles.menu_box].join(' ')
              : [styles.menu_box_default, styles.menu_box].join(' ')
          }
        >
          Διπλωματικές
        </h2>
      </div>
      <div onClick={() => setIsActive(2)}>
        <h2
          className={
            isActive === 2
              ? [styles.menu_box_selected, styles.menu_box].join(' ')
              : [styles.menu_box_default, styles.menu_box].join(' ')
          }
        >
          Αιτήματα
        </h2>
      </div>
      <div onClick={() => setIsActive(3)}>
        <h2
          className={
            isActive === 3
              ? [styles.menu_box_selected, styles.menu_box].join(' ')
              : [styles.menu_box_default, styles.menu_box].join(' ')
          }
        >
          Εγκρίσεις
        </h2>
      </div>
    </div>
  )
}

export default MobileTeacherMenu
