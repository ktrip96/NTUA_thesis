import { FiSearch } from 'react-icons/fi'
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import styles from './SearchBar.module.css'

function SearchBar({ setSearchField }) {
  const handleChange = (e) => {
    setSearchField(e.target.value)
  }

  return (
    <div className={styles.search_ctn}>
      <InputGroup>
        <InputLeftElement pointerEvents='none'>
          <FiSearch
            style={{
              height: '30px',
              width: '30px',
              color: '#888888',
              marginLeft: '10px',
              marginRight: '10px',
              marginTop: '5px',
            }}
          />
        </InputLeftElement>
        <Input
          type='tel'
          placeholder='Αναζήτηση'
          size='lg'
          onChange={handleChange}
        />
      </InputGroup>
    </div>
  )
}

export default SearchBar
