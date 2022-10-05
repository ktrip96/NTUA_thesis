import { useState } from 'react'
import styles from './index.module.css'
import Header from '../../components/Header'
import PageMenu from '../../components/teacher/PageMenu'
import SearchBar from '../../components/SearchBar'
import { getTeacherData } from '../../dummy_data'
import TeacherProjectBox from '../../components/teacher/TeacherProjectBox'
import FilterMenu from '../../components/teacher/FilterMenu'
import Grid from '../../components/teacher/Grid'
import Link from 'next/link'
import { Button } from '@chakra-ui/react'

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

  const statusFilteredData = searchFilteredData.filter((item) => {
    return activeFilters.includes(item.status)
  })

  const conditionalRender = (activeMenuPage) => {
    if (activeMenuPage === 1)
      return (
        <div className={styles.grid_container}>
          <Grid category={'random'} data={statusFilteredData} />
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

      <div className={styles.center}>
        <SearchBar setSearchField={setSearchField} />
      </div>

      <Link href={'/teacher/NewProject'} passHref={true}>
        <div className={styles.center}>
          <Button colorScheme={'whatsapp'} size='lg' className={styles.button}>
            Νέα διπλωματική
          </Button>
        </div>
      </Link>

      <div className={styles.center}>
        <PageMenu
          setActiveMenuPage={setActiveMenuPage}
          activeMenuPage={activeMenuPage}
          category={'teacher'}
        />
      </div>
      <div className={styles.center}>
        <FilterMenu
          filterArray={filterArray}
          activeFilters={activeFilters}
          setActiveFilters={setActiveFilters}
        />
      </div>

      {conditionalRender(activeMenuPage)}
    </div>
  )
}

export default TeacherHome
