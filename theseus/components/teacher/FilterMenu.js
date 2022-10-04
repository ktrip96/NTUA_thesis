import styles from './FilterMenu.module.css'
import { Switch } from '@chakra-ui/react'

function FilterMenu({ filterArray, activeFilters, setActiveFilters }) {
  const handleChange = (e) => {
    const isChecked = e.target.checked
    const filterValue = e.target.value
    if (isChecked) {
      if (!activeFilters.includes(filterValue))
        setActiveFilters((prev) => [...prev, filterValue])
    } else {
      const new_array = activeFilters.filter((item) => item !== filterValue)
      setActiveFilters(new_array)
    }
  }

  return (
    <div className={styles.box_ctn}>
      {filterArray.map((item, key) => (
        <div key={key}>
          <p className={styles.label}>{item}</p>
          <Switch
            defaultChecked
            ml={'25%'}
            value={item}
            onChange={handleChange}
          />
        </div>
      ))}
    </div>
  )
}

export default FilterMenu
