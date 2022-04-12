import styles from './FilterMenu.module.css'
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'
import { useState } from 'react'

function FilterMenu() {
  const [checkStatus, setCheckStatus] = useState([])

  return (
    <div className={styles.box_ctn}>
      <CheckboxGroup colorScheme='green' defaultValue={[]}>
        <Checkbox className={styles.box} value='done' size='md'>
          Done
        </Checkbox>
        <Checkbox className={styles.box} value='doing' size='md'>
          Doing
        </Checkbox>
        <Checkbox className={styles.box} value='pending' size='md'>
          Pending
        </Checkbox>
      </CheckboxGroup>
    </div>
  )
}

export default FilterMenu
