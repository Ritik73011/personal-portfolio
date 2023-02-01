import React from 'react'
import './Skills.css'
import {skillList} from '../../info'
import { Box, Card, Typography } from '@mui/material'
const Skills = () => {
  return (
    <Box sx={{marginTop:"80px"}} id="Skills">
        <Typography variant='h4'>SKILLS</Typography>
        <Box sx={{margin:"32px auto",display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(9em, 1fr))",gridGap:"2em"}}>
        {
            skillList.map((ele,indx)=>{
                return <Card key={indx+1} sx={{padding:"1em",margin:"0 auto",textAlign:"center",boxShadow:"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",transition:"transform 0.2s linear","&:hover":{transform: "translateY(-7px)"}}}>
                        <img src={ele.logo} alt={ele.title} style={{width:"100%"}}/>
                        <Typography>{ele.title}</Typography>
                </Card>
            })
        }
      </Box>
    </Box>
  )
}

export default Skills