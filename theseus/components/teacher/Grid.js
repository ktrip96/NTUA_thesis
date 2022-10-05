import React from 'react'
import styles from './Grid.module.css'
import ThesisBox from './ThesisBox'

function Grid({ data }) {
  console.log(data)
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
}

export default Grid
