import Logo from '../components/Logo'
import MobileStudentMenu from '../components/MobileStudentMenu'
import ProfileImage from '../components/ProfileImage'
import ApplicationBox from '../components/ApplicationBox'
import ProjectBox from '../components/ProjectBox'
import ProjectInfo from '../components/ProjectInfo'
import SearchBar from '../components/SearchBar'
import styles from './index.module.css'

function StudentHome() {
  return (
    <div className={styles.main_ctn}>
      <div className={styles.header}>
        <Logo />
        <div style={{ flexGrow: 1 }}></div>
        <ProfileImage />
      </div>

      <div className={styles.search}>
        <SearchBar />
      </div>

      <div className={styles.menu}>
        <MobileStudentMenu />
      </div>
      {/* Όλες οι διπλωματικές */}
      <div className={styles.project_ctn}>
        <ProjectBox
          path='energy'
          teacher='Παναγιώτης Τσανάκας'
          name='Theseus Project'
        />
        <ProjectBox
          path='software'
          teacher='Νίκος Παπασπύρου'
          name='Random Project'
        />
        <ProjectBox
          path='communications'
          teacher='Βασίλης Βεσκούκης'
          name='Telecommunications '
        />
        <ProjectBox
          path='electronics'
          teacher='Γιώργος Σιόλας'
          name='Artificial Intelligence'
        />
        <ProjectBox
          path='energy'
          teacher='Παναγιώτης Τσανάκας'
          name='Theseus Project'
        />
        <ProjectBox
          path='communications'
          teacher='Βασίλης Βεσκούκης'
          name='Telecommunications '
        />
      </div>
      {/* <ProjectInfo /> */}
      {/* Οι αιτήσεις μου */}
      {/* <ApplicationBox /> */}
      {/* Η διπλωματική μου */}
    </div>
  )
}

export default StudentHome
