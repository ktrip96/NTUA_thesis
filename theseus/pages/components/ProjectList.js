import StudentProjectBox from '../components/student/StudentProjectBox'
import TeacherProjectBox from './teacher/TeacherProjectBox'
import styles from './ProjectList.module.css'
import { useState } from 'react'
import { BsArrowDownCircle } from 'react-icons/bs'
import { Button } from '@chakra-ui/react'
import Link from 'next/link'

function ProjectList({ DEVELOPING_DATA, category }) {
  const [numberOfProjects, setNumberOfProject] = useState(6)

  const slice = DEVELOPING_DATA.slice(0, numberOfProjects)

  function conditionalCategory() {
    if (category === 'student')
      return (
        <>
          {slice.map((item, i) => (
            <StudentProjectBox
              name={item.name}
              teacher={item.teacher}
              path={item.path}
              id={item.id}
              key={i}
            />
          ))}
        </>
      )
    else if (category === 'teacher')
      return (
        <>
          {slice.map((item, i) => (
            <TeacherProjectBox
              name={item.name}
              teacher={item.teacher}
              path={item.path}
              id={item.id}
              status={item.status}
              key={i}
            />
          ))}
        </>
      )
  }

  return (
    <div className={styles.project_ctn}>
      {conditionalCategory()}

      <BsArrowDownCircle
        className={styles.icon}
        onClick={() => {
          setNumberOfProject(
            (numberOfProjects) => numberOfProjects + numberOfProjects
          )
        }}
      />
      {category === 'teacher' && (
        <Link href={'/teacher/NewProject'} passHref={true}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button colorScheme={'telegram'} className={styles.button}>
              Δημιουργία διπλωματικής
            </Button>
          </div>
        </Link>
      )}
    </div>
  )
}

export default ProjectList
