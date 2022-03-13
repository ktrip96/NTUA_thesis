import { FiSearch } from 'react-icons/fi'
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import styles from './SearchBar.module.css'

function SearchBar() {
  return (
    <div className={styles.search_ctn}>
      <InputGroup>
        <InputLeftElement pointerEvents='none'>
          <FiSearch />
        </InputLeftElement>
        <Input type='tel' placeholder='Αναζήτηση' size='md' />
      </InputGroup>
    </div>
  )
}

export default SearchBar
