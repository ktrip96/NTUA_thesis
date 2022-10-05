import React from 'react'
import styles from './Grid.module.css'
import ThesisBox from './ThesisBox'
import ApprovalBox from './ApprovalBox'
import RequestBox from './RequestBox'

function Grid({ category, data }) {
  console.log(data)
  if (category === 'thesis')
    return (
      <div className={styles.grid}>
        {data.map((item) => (
          <ThesisBox
            key={item.id}
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

  return <h1>Not found</h1>
}

export default Grid
