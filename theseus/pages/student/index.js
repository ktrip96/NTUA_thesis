import MobileStudentMenu from '../components/MobileStudentMenu'
import ProjectInfo from '../components/ProjectInfo'
import SearchBar from '../components/SearchBar'
import styles from './index.module.css'
import Header from '../components/Header'
import ProjectList from '../components/ProjectList'

function StudentHome() {
  return (
    <div className={styles.main_ctn}>
      <Header />

      <div className={styles.search}>
        <SearchBar />
      </div>

      <div className={styles.menu}>
        <MobileStudentMenu />
      </div>

      <ProjectList />
      {/* <ProjectInfo /> */}
      {/* Οι αιτήσεις μου */}
      {/* <ApplicationBox /> */}
      {/* Η διπλωματική μου */}
    </div>
  )
}

export default StudentHome
