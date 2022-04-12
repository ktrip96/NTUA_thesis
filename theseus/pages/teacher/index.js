import { useState } from 'react'
import styles from './index.module.css'
import Header from '../components/Header'
import MobileTeacherMenu from '../components/teacher/MobileTeacherMenu'
import SearchBar from '../components/SearchBar'

function TeacherHome() {
  const [isActive, setIsActive] = useState(1)
  const [searchField, setSearchField] = useState('')

  function conditionalRender(isActive) {
    if (isActive === 1) return <h1>1</h1>
    if (isActive === 2) return <h1>2</h1>
    if (isActive === 3) return <h1>3</h1>
  }

  return (
    <div className={styles.main_ctn}>
      <Header category={'teacher'} />

      <div className={styles.search}>
        <SearchBar setSearchField={setSearchField} />
      </div>

      <div className={styles.menu}>
        <MobileTeacherMenu setIsActive={setIsActive} isActive={isActive} />
      </div>

      {conditionalRender(isActive)}
    </div>
  )
}

export default TeacherHome
