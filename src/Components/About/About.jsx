import { Box, Typography } from '@mui/material'
import React from 'react'
import {image, name,summary} from '../../info';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './About.css'
const About = () => {
  return (
    <Box sx={{display:"flex",justifyContent:"space-around",gap:"16px"}}>
        <Box sx={{maxWidth:"60%", width:"100%"}}>
            <Typography variant='h4' sx={{textAlign:"left"}}>HELLO</Typography>
            <Typography variant='h3' sx={{textAlign:"left"}}>I am {name}</Typography>
            <Typography sx={{textAlign:"left"}}>{summary}</Typography>
            <Box>
                <GitHubIcon/>
                <LinkedInIcon/>
            </Box>
        </Box>
        <Box sx={{maxWidth:"40%", width:"100%"}}>
          <Box sx={{maxWidth:"320px", margin:"auto",height:"90%", width:"100%",borderRadius:"36px",bgcolor:"primary.main"}}>
            <img className='profile'src={image} alt={name}/>
          </Box>
        </Box>
    </Box>
  )
}

export default About