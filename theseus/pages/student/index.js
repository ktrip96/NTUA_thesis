import { useState } from 'react'
import MobileStudentMenu from '../components/MobileStudentMenu'
import SearchBar from '../components/SearchBar'
import styles from './index.module.css'
import Header from '../components/Header'
import ProjectList from '../components/ProjectList'
import ApplicationBox from '../components/ApplicationBox'

function conditionalRender(isActive) {
  if (isActive === 1) return <ProjectList />
  if (isActive === 2) return <ApplicationBox />
  if (isActive === 3)
    return <h1>Εδώ θα μπεί το progress και τα tasks της διπλωματικής </h1>
}

function StudentHome() {
  const [isActive, setIsActive] = useState(1)
  return (
    <div className={styles.main_ctn}>
      <Header />

      <div className={styles.search}>
        <SearchBar />
      </div>

      <div className={styles.menu}>
        <MobileStudentMenu setIsActive={setIsActive} isActive={isActive} />
      </div>

      {conditionalRender(isActive)}

      {/* Οι αιτήσεις μου */}

      {/* Η διπλωματική μου */}
    </div>
  )
}

export default StudentHome
