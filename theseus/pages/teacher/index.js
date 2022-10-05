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
import { Button, useBreakpointValue } from '@chakra-ui/react'

function TeacherHome() {
  const [activeMenuPage, setActiveMenuPage] = useState(1)
  const [searchField, setSearchField] = useState('')
  const filterArray = ['Ολοκληρωμένη', 'Σε εξέλιξη', 'Διαθέσιμη']
  const [activeFilters, setActiveFilters] = useState(filterArray)

  // Φιλτράρισμα δεδομένων

  const searchFilteredData = getTeacherData().filter((project) => {
    //TODO: πρέπει να γίνει update ανάλογα με τα πραγματικά data
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
        <>
          <div className={styles.center}>
            <FilterMenu
              filterArray={filterArray}
              activeFilters={activeFilters}
              setActiveFilters={setActiveFilters}
            />
          </div>
          <div className={styles.grid_container}>
            <Grid category='thesis' data={statusFilteredData} />
          </div>
        </>
      )
    if (activeMenuPage === 2)
      return (
        <div className={styles.grid_container}>
          <Grid category='requests' data={statusFilteredData} />
        </div>
      )
    if (activeMenuPage === 3)
      return (
        <div className={styles.grid_container}>
          <Grid category='approvals' data={statusFilteredData} />
        </div>
      )
  }

  return (
    <div className='main_ctn'>
      <Header category={'teacher'} />

      <div className={styles.center}>
        <SearchBar setSearchField={setSearchField} />
      </div>

      <Link href={'/teacher/newProject'} passHref={true}>
        <div className={styles.center}>
          <Button
            colorScheme={'whatsapp'}
            size={useBreakpointValue(['sm', 'md', 'lg'])}
            className={styles.button}
          >
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

      {conditionalRender(activeMenuPage)}
    </div>
  )
}

export default TeacherHome
