import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import { Card, Link, Typography } from '@mui/material';

import './ProjectCard.css'
const ProjectCard = ({project}) => {
  return (
    <Card sx={{padding:"2em",margin:"0 auto",textAlign:"center",boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",transition:"transform 0.2s linear","&:hover":{transform: "translateY(-7px)"}}}>
    <img src={project.img} alt='' style={{width:"100%"}}/>
    <Typography variant='h6' sx={{marginTop:"8px",fontWeight:"bolder"}}>{project.name}</Typography>

    <Typography sx={{marginTop:"1em"}}>{project.description}</Typography>
    {project.stack && (
      <ul className='project__stack'>
        {project.stack.map((item,indx) => (
          <li key={indx} className='project__stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )}

    {project.sourceCode && (
      <Link
        href={project.sourceCode}
        aria-label='source code'
        target='_blank'
      >
        <GitHubIcon />
      </Link>
    )}

    {project.livePreview && (
      <Link
      sx={{marginLeft:"1em"}}
        href={project.livePreview}
        aria-label='live preview'
        target='_blank'
      >
        <LaunchIcon />
      </Link>
    )}
  </Card>
  )
}

export default ProjectCard