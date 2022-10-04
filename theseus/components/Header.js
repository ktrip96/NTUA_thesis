import Logo from './Logo'
import styles from './Header.module.css'
import Image from 'next/image'

function Header({ category }) {
  return (
    <div className={styles.header}>
      <Logo category={category} />
      <div className={styles.profile_image}>
        <Image src={'/images/unsplash_1.jpg'} alt='' width={70} height={70} />
      </div>
    </div>
  )
}

export default Header
