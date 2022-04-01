import { useState } from 'react'
import MobileStudentMenu from '../components/MobileStudentMenu'
import SearchBar from '../components/SearchBar'
import styles from './index.module.css'
import Header from '../components/Header'
import ProjectList from '../components/ProjectList'
import ApplicationBox from '../components/ApplicationBox'
import { getSearchbarData } from '../../dummy_data'

function StudentHome() {
  const [isActive, setIsActive] = useState(1)
  const [searchField, setSearchField] = useState('')

  // Σημαντική σημείωση: Κανονικά η getSearchbarData() δεν θα υπάρχει.
  // Θα αντικατασταθεί με ένα API call που θα τραβάει όλες τις διπλωματικές.

  const filteredData = getSearchbarData().filter((project) => {
    return (
      project.name.toLowerCase().includes(searchField.toLowerCase()) ||
      project.path.toLowerCase().includes(searchField.toLowerCase()) ||
      project.teacher.toLowerCase().includes(searchField.toLowerCase())
    )
  })

  function conditionalRender(isActive) {
    if (isActive === 1) return <ProjectList DEVELOPING_DATA={filteredData} />
    if (isActive === 2) return <ApplicationBox />
    if (isActive === 3)
      return <h1>Εδώ θα μπεί το progress και τα tasks της διπλωματικής </h1>
  }

  return (
    <div className={styles.main_ctn}>
      <Header />

      <div className={styles.search}>
        <SearchBar setSearchField={setSearchField} />
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
