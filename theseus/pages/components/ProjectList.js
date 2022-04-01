import ProjectBox from './ProjectBox'
import styles from './ProjectList.module.css'
import { useState } from 'react'
import { BsArrowDownCircle } from 'react-icons/bs'

function ProjectList({ DEVELOPING_DATA }) {
  const [numberOfProjects, setNumberOfProject] = useState(6)

  const slice = DEVELOPING_DATA.slice(0, numberOfProjects)

  return (
    <div className={styles.project_ctn}>
      {slice.map((item, i) => (
        <ProjectBox
          name={item.name}
          teacher={item.teacher}
          path={item.path}
          id={item.id}
          key={i}
        />
      ))}

      <BsArrowDownCircle
        className={styles.icon}
        onClick={() => {
          setNumberOfProject(
            (numberOfProjects) => numberOfProjects + numberOfProjects
          )
        }}
      />
    </div>
  )
}

export default ProjectList
