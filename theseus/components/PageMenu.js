import styles from './PageMenu.module.css'

let menuArray = []

function PageMenu({ activeMenuPage, setActiveMenuPage, category }) {
  if (category === 'teacher')
    menuArray = ['Διπλωματικές', 'Αιτήματα', 'Εγκρίσεις']
  if (category === 'student') menuArray = ['Διπλωματικές', 'Οι αιτήσεις μου']

  return (
    <div className={styles.menu_ctn}>
      {menuArray.map((item, key) => (
        <button key={key} onClick={() => setActiveMenuPage(key + 1)}>
          <h2
            className={styles.menu_box}
            style={activeMenuPage === key + 1 ? { fontWeight: 'bold' } : {}}
          >
            {item}
          </h2>
        </button>
      ))}
    </div>
  )
}

export default PageMenu
