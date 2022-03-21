import React from 'react'
import { useRouter } from 'next/router'
import ProjectInfo from '../components/ProjectInfo'
import { AiOutlineArrowLeft } from 'react-icons/ai'

function ProjectPage() {
  const router = useRouter()

  const projectId = router.query.projectId
  return (
    <div>
      <AiOutlineArrowLeft
        style={{
          height: '40px',
          width: '40px',
          marginTop: '30px',
          marginLeft: '15px',
        }}
      />
      <ProjectInfo projectId={projectId} />
    </div>
  )
}

export default ProjectPage
