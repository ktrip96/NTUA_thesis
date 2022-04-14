import { useState } from 'react'
import styles from './index.module.css'
import Header from '../components/Header'
import MobileMenu from '../components/MobileMenu'
import SearchBar from '../components/SearchBar'
import ProjectList from '../components/ProjectList'
import { getTeacherData } from '../../dummy_data'
import TeacherProjectBox from '../components/teacher/TeacherProjectBox'
import FilterMenu from '../components/teacher/FilterMenu'

function TeacherHome() {
  const [isActive, setIsActive] = useState(1)
  const [searchField, setSearchField] = useState('')
  const [checkboxArray, setCheckboxArray] = useState([
    'done',
    'doing',
    'pending',
  ])

  const searchFilteredData = getTeacherData().filter((project) => {
    return (
      project.name.toLowerCase().includes(searchField.toLowerCase()) ||
      project.path.toLowerCase().includes(searchField.toLowerCase()) ||
      project.teacher.toLowerCase().includes(searchField.toLowerCase())
    )
  })

  const checkBoxFilteredData = searchFilteredData.filter((item) => {
    return checkboxArray.includes(item.status)
  })

  function conditionalRender(isActive) {
    if (isActive === 1)
      return (
        <ProjectList
          DEVELOPING_DATA={checkBoxFilteredData}
          category={'teacher'}
        />
      )
    if (isActive === 2)
      return <TeacherProjectBox status='done' name='Haskell Project' />
    if (isActive === 3) return <h1>3</h1>
  }

  return (
    <div className={styles.main_ctn}>
      <Header category={'teacher'} />

      <div className={styles.search}>
        <SearchBar setSearchField={setSearchField} />
      </div>

      <div className={styles.menu}>
        <MobileMenu
          setIsActive={setIsActive}
          isActive={isActive}
          category={'teacher'}
        />
      </div>
      <FilterMenu
        setCheckboxArray={setCheckboxArray}
        checkboxArray={checkboxArray}
      />
      {conditionalRender(isActive)}
    </div>
  )
}

export default TeacherHome
