
import {Box, Typography} from '@mui/material'
import {projects} from '../../info'
import ProjectCard from '../ProjectCard/ProjectCard';
import './Projects.css';
const Projects = () => {
  return (
    <Box sx={{marginTop:"80px"}} id="Projects">
      <Typography variant='h4'>PROJECTS</Typography>
      <Box sx={{margin:"32px auto",display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(18em, 1fr))",gridGap:"2em"}}>
      {projects.map((project,indx) => (
          <ProjectCard key={indx} project={project} />
        ))}
      </Box>
    </Box>
  )
}

export default Projects