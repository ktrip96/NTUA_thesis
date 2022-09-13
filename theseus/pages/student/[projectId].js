import React from 'react'
import { useRouter } from 'next/router'
import ProjectInfo from '../components/ProjectInfo'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import styles from './ProjectId.module.css'

function ProjectPage() {
  const router = useRouter()

  const projectId = router.query.projectId
  return (
    <div className={styles.box_ctn}>
      <AiOutlineArrowLeft
        className={styles.icon}
        onClick={() => router.back()}
      />
      <ProjectInfo projectId={projectId} />
    </div>
  )
}

export default ProjectPage
