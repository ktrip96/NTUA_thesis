import styles from './FilterMenu.module.css'
import { Checkbox, CheckboxGroup, Stack } from '@chakra-ui/react'

function FilterMenu() {
  return (
    <div className={styles.color}>
      <CheckboxGroup colorScheme='green' defaultValue={['naruto', 'kakashi']}>
        <Checkbox value='naruto'>Naruto</Checkbox>
        <Checkbox value='sasuke'>Sasuke</Checkbox>
        <Checkbox value='kakashi'>kakashi</Checkbox>
      </CheckboxGroup>
    </div>
  )
}

export default FilterMenu
