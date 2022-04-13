import styles from './FilterMenu.module.css'
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'

function FilterMenu({ setCheckboxArray, checkboxArray }) {
  const handleOnChange = (e) => {
    const checkbox_value = e.target.value
    // Αν έχουμε ήδη το value στο state, π.χ. [done], τότε αφαίρεσέ το.
    if (checkboxArray.includes(checkbox_value)) {
      const new_array = checkboxArray.filter((item) => item !== checkbox_value)
      setCheckboxArray(new_array)
    }
    // αλλιώς αν δεν υπάρχει το value στο state, π.χ. [doing, pending] πρόσθεσέ το.
    else {
      const new_array = [...checkboxArray, checkbox_value]
      setCheckboxArray(new_array)
    }
  }

  return (
    <div className={styles.box_ctn}>
      <CheckboxGroup
        colorScheme='green'
        defaultValue={['done', 'doing', 'pending']}
      >
        <Checkbox
          className={styles.box}
          value='done'
          size='md'
          onChange={handleOnChange}
        >
          Done
        </Checkbox>
        <Checkbox
          className={styles.box}
          value='doing'
          size='md'
          onChange={handleOnChange}
        >
          Doing
        </Checkbox>
        <Checkbox
          className={styles.box}
          value='pending'
          size='md'
          onChange={handleOnChange}
        >
          Pending
        </Checkbox>
      </CheckboxGroup>
    </div>
  )
}

export default FilterMenu
