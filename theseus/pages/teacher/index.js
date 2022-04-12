import { useState } from 'react'
import styles from './index.module.css'
import Header from '../components/Header'
import MobileMenu from '../components/MobileMenu'
import SearchBar from '../components/SearchBar'
import ProjectList from '../components/ProjectList'
import { getTeacherData } from '../../dummy_data'
import TeacherProjectBox from '../components/teacher/TeacherProjectBox'

function TeacherHome() {
  const [isActive, setIsActive] = useState(1)
  const [searchField, setSearchField] = useState('')

  // To Be Done
  // Τα δεδομένα θα περνάνε 2 φιλτραρίσματα, πριν κληθούν από το ProjectList

  const filteredData = getTeacherData().filter((project) => {
    return (
      project.name.toLowerCase().includes(searchField.toLowerCase()) ||
      project.path.toLowerCase().includes(searchField.toLowerCase()) ||
      project.teacher.toLowerCase().includes(searchField.toLowerCase())
    )
  })

  function conditionalRender(isActive) {
    if (isActive === 1)
      return <ProjectList DEVELOPING_DATA={filteredData} category={'teacher'} />
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

      {conditionalRender(isActive)}
    </div>
  )
}

export default TeacherHome
