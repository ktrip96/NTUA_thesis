import React from 'react'
import styles from './Grid.module.css'
import ThesisBox from './teacher/ThesisBox'
import ApprovalBox from './teacher/ApprovalBox'
import RequestBox from './teacher/RequestBox'
import StudentRequestBox from './student/StudentRequestBox'
import StudentThesisBox from './student/StudentThesisBox'

function Grid({ category, data }) {
  if (category === 'thesis')
    return (
      <div className={styles.grid}>
        {data.map((item) => (
          <ThesisBox
            key={item.id}
            id={item.id}
            title={item.name}
            path={item.path}
            status={item.status}
          />
        ))}
      </div>
    )
  if (category === 'requests')
    return (
      <div className={styles.grid}>
        {data.map((item) => (
          <RequestBox
            key={item.id}
            title={item.name}
            path={item.path}
            status={item.status}
          />
        ))}
      </div>
    )
  if (category === 'approvals')
    return (
      <div className={styles.grid}>
        {data.map((item) => (
          <ApprovalBox
            key={item.id}
            title={item.name}
            path={item.path}
            status={item.status}
          />
        ))}
      </div>
    )

  if (category === 'student_thesis')
    return (
      <div className={styles.grid}>
        {data.map((item) => (
          <StudentThesisBox
            key={item.id}
            id={item.id}
            title={item.name}
            path={item.path}
            teacher={item.teacher}
          />
        ))}
      </div>
    )
  if (category === 'student_requests')
    return (
      <div className={styles.grid}>
        {data.map((item) => (
          <StudentRequestBox
            status={item.status}
            teacher={item.teacher}
            path={item.path}
            key={item.id}
            title={item.name}
          />
        ))}
      </div>
    )

  return <h1>Not found</h1>
}

export default Grid
