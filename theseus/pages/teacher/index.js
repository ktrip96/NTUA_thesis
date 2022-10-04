import { useState } from 'react'
import styles from './index.module.css'
import Header from '../../components/Header'
import PageMenu from '../../components/PageMenu'
import SearchBar from '../../components/SearchBar'
import ProjectList from '../../components/ProjectList'
import { getTeacherData } from '../../dummy_data'
import TeacherProjectBox from '../../components/teacher/TeacherProjectBox'
import FilterMenu from '../../components/teacher/FilterMenu'
import Grid from '../../components/teacher/Grid'

function TeacherHome() {
  const [activeMenuPage, setActiveMenuPage] = useState(1)
  const [searchField, setSearchField] = useState('')
  const filterArray = ['Ολοκληρωμένη', 'Σε εξέλιξη', 'Διαθέσιμη']
  const [activeFilters, setActiveFilters] = useState(filterArray)

  // Φιλτράρισμα δεδομένων

  const searchFilteredData = getTeacherData().filter((project) => {
    return (
      project.name.toLowerCase().includes(searchField.toLowerCase()) ||
      project.path.toLowerCase().includes(searchField.toLowerCase()) ||
      project.teacher.toLowerCase().includes(searchField.toLowerCase())
    )
  })

  // const checkBoxFilteredData = searchFilteredData.filter((item) => {
  //   return filterArray.includes(item.status)
  // })

  const conditionalRender = (activeMenuPage) => {
    if (activeMenuPage === 1)
      return (
        // <ProjectList
        //   DEVELOPING_DATA={searchFilteredData}
        //   category={'teacher'}
        // />
        <div className={styles.grid_container}>
          <Grid category={'random'} data={searchFilteredData} />
        </div>
      )
    if (activeMenuPage === 2)
      return <TeacherProjectBox status='done' name='Haskell Project' />
    if (activeMenuPage === 3)
      return (
        <h1>
          Αυτή η σελίδα θα εμφανίζεται ΜΟΝΟ όταν ο user είναι υπεύθυνος τομέα.
          Εδώ θα μπορεί να κάνει έγκριση της κάθε διπλωματικής
        </h1>
      )
  }

  return (
    <div className={styles.main_ctn}>
      <Header category={'teacher'} />

      <div className={styles.search}>
        <SearchBar setSearchField={setSearchField} />
      </div>

      <div className={styles.menu}>
        <PageMenu
          setActiveMenuPage={setActiveMenuPage}
          activeMenuPage={activeMenuPage}
          category={'teacher'}
        />
      </div>
      <FilterMenu
        filterArray={filterArray}
        activeFilters={activeFilters}
        setActiveFilters={setActiveFilters}
      />

      {conditionalRender(activeMenuPage)}
    </div>
  )
}

export default TeacherHome
