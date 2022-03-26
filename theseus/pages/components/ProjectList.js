import Loading from './Loading'
import ProjectBox from './ProjectBox'
import styles from './ProjectList.module.css'

const DEVELOPING_DATA = [
  {
    path: 'software',
    teacher: 'Νίκος Παπασπύρου',
    name: 'Haskell Project',
    id: 'L04328948',
  },
  {
    path: 'energy',
    teacher: 'Παναγιώτης Τσανάκας',
    name: 'Theseus Project',
    id: 'L04328948',
  },
  {
    path: 'communications',
    teacher: 'Βασίλης Βεσκούκης',
    name: 'Telecommunications',
    id: 'L04328947',
  },
  {
    path: 'electronics',
    teacher: 'Γιώργιος Σιόλας',
    name: 'Artificial Intelligence',
    id: 'L04328947',
  },
  {
    path: 'software',
    teacher: 'Νίκος Παπασπύρου',
    name: 'Haskell Project',
    id: 'L04328946',
  },
  {
    path: 'communications',
    teacher: 'Βασίλης Βεσκούκης',
    name: 'Telecommunications',
    id: 'L04328946',
  },
]

function ProjectList() {
  return (
    <div className={styles.project_ctn}>
      {DEVELOPING_DATA.map((item, i) => (
        <ProjectBox
          name={item.name}
          teacher={item.teacher}
          path={item.path}
          id={item.id}
          key={i}
        />
      ))}
    </div>
  )
}

export default ProjectList
