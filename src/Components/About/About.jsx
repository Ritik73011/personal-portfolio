import { Box, Typography } from '@mui/material'
import React from 'react'
import {image, name,summary} from '../../info';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const About = () => {
  return (
    <Box sx={{display:"flex",justifyContent:"space-between"}}>
        <Box>
            <Typography variant='h4' sx={{textAlign:"left"}}>HELLO</Typography>
            <Typography variant='h3' sx={{textAlign:"left"}}>I am {name}</Typography>
            <Typography sx={{textAlign:"left"}}>{summary}</Typography>
            <Box>
                <GitHubIcon/>
                <LinkedInIcon/>
            </Box>
        </Box>
        <Box>
            <img width={'100%'} src={image} alt={name}/>
        </Box>
    </Box>
  )
}

export default About