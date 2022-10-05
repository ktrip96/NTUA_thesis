import styles from './PageMenu.module.css'

function PageMenu({ activeMenuPage, setActiveMenuPage, category }) {
  const menuArray = ['Διπλωματικές', 'Αιτήματα', 'Εγκρίσεις']

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
