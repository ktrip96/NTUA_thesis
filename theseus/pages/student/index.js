import Logo from '../components/Logo'
import MobileStudentMenu from '../components/MobileStudentMenu'
import ProfileImage from '../components/ProfileImage'
import ProjectBox from '../components/ProjectBox'
import ProjectInfo from '../components/ProjectInfo'
import SearchBar from '../components/SearchBar'
import styles from './index.module.css'

function StudentHome() {
  return (
    <div className={styles.main_ctn}>
      {/* <Logo /> */}
      {/* <ProfileImage /> */}

      {/* <SearchBar /> */}

      {/* <MobileStudentMenu /> */}
      {/* Όλες οι διπλωματικές */}

      {/* <ProjectBox />
      <ProjectBox />
      <ProjectBox /> */}
      <ProjectInfo />
      {/* Οι αιτήσεις μου */}

      {/* Η διπλωματική μου */}
    </div>
  )
}

export default StudentHome
