import styles from './ProfileImage.module.css'
import Image from 'next/image'

function ProfileImage() {
  return (
    <div className={styles.profile_image}>
      <Image src={'/images/unsplash_1.jpg'} alt='' width={80} height={80} />
    </div>
  )
}

export default ProfileImage
