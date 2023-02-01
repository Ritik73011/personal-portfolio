import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import { Card, Link, Typography,Box } from '@mui/material';

import './ProjectCard.css'
const ProjectCard = ({project}) => {
  return (
    <Card sx={{padding:"2em",margin:"0 auto",textAlign:"center",boxShadow:"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",transition:"transform 0.2s linear","&:hover":{transform: "translateY(-7px)"},position:"relative"}}>
    <img src={project.img} alt='' style={{width:"100%"}}/>
    <Typography variant='h6' sx={{marginTop:"8px",fontWeight:"bolder",minHeight:"64px"}}>{project.name}</Typography>

    <Typography sx={{marginTop:"1em",minHeight:"160px"}}>{project.description}</Typography>
    
    {/*{project.stack && (
      <ul className='project__stack'>
        {project.stack.map((item,indx) => (
          <li key={indx} className='project__stack-item'>
            {item}
          </li>
        ))}
      </ul>
        )}*/}

    <Box sx={{display:"flex",flexWrap:"wrap",gap:"8px",marginTop:"16px",justifyContent:"center",marginBottom:"24px"}}>
        {project.stack.map((ele,indx)=>{
          return <Typography key={indx+1} sx={{
          fontSize:"14px"           
          }}><b>{ele}</b></Typography>
        })}
    </Box>

    <Box sx={{position:"absolute",bottom:"0",left:"0",right:"0",paddingBottom:"16px"}}>
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
    </Box>
  </Card>
  )
}

export default ProjectCard