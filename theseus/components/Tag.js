import React from 'react'
import styles from './Tag.module.css'
import roiColor from '../helper/helper_functions'

const returnBackgroundColor = (letter) => {
  return {
    backgroundColor: `var(--light-${letter}-color)`,
    color: `var(--${letter}-color)`,
  }
}
function Tag({ content, path }) {
  return (
    <div className='same_line'>
      {content.map((item, i) => (
        <div
          className={styles.tag}
          style={returnBackgroundColor(roiColor[path])}
          key={i}
        >
          {item}
        </div>
      ))}
    </div>
  )
}

export default Tag
