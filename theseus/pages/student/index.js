import { useState } from 'react'
import PageMenu from '../../components/PageMenu'
import SearchBar from '../../components/SearchBar'
import styles from './index.module.css'
import Header from '../../components/Header'
import ProjectList from '../../components/ProjectList'
import Grid from '../../components/Grid'
import { getSearchbarData } from '../../dummy_data'

function StudentHome() {
  const [activeMenuPage, setActiveMenuPage] = useState(1)
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

  function conditionalMenuRender(activeMenuPage) {
    if (activeMenuPage === 1)
      return (
        <div className={styles.grid_container}>
          <Grid category='student_thesis' data={getSearchbarData()} />
        </div>
      )
    if (activeMenuPage === 2)
      return (
        <div className={styles.grid_container}>
          <Grid category='student_requests' data={getSearchbarData()} />
        </div>
      )
  }

  return (
    <div className='main_ctn'>
      <Header category={'student'} />

      <div className={styles.search}>
        <SearchBar setSearchField={setSearchField} />
      </div>

      <div className={styles.menu}>
        <PageMenu
          setActiveMenuPage={setActiveMenuPage}
          activeMenuPage={activeMenuPage}
          category={'student'}
        />
      </div>

      {conditionalMenuRender(activeMenuPage)}
    </div>
  )
}

export default StudentHome
