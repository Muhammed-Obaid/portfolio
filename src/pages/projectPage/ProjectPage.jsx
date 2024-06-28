import React from 'react'
import Project from '../../components/project/Project'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'

const ProjectPage = () => {
  return (
    <div>
      <div className="above">
        <Navbar />
        <Sidebar />
      </div>
      <Project />
    </div>
  )
}

export default ProjectPage
