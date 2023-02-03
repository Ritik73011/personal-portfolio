import { Box, Card, Typography } from '@mui/material'
import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './Contact.css'
const Contact = () => {
  const mailMe = ()=>{
    window.open('mailto:ritikkumarsingh730@gmail.com','_blank');
  }
  const WhatsApp = ()=>{
    window.open('https://wa.me/919304613678','_blank');
  }
  const linkdln = ()=>{
    window.open('https://www.linkedin.com/in/ritik-kumar-singh-161618208/','_blank');
  }
  return (
    <Box sx={{marginTop:"80px"}} id="Contact">
         <Typography variant='h4'>CONTACTS</Typography>
         <Box sx={{marginTop:"16px",display:"flex",justifyContent:"center",gap:"16px"}}>
            <Card onClick={mailMe} sx={{padding:"1em",cursor:"pointer",textAlign:"center",boxShadow:"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",transition:"transform 0.2s linear","&:hover":{transform: "translateY(-7px)"}}}>
                <EmailIcon fontSize='large' sx={{color:'#f73f2f'}}/>
            </Card>
            <Card onClick={WhatsApp} sx={{padding:"1em",cursor:"pointer",textAlign:"center",boxShadow:"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",transition:"transform 0.2s linear","&:hover":{transform: "translateY(-7px)"}}}>
                <WhatsAppIcon fontSize='large' sx={{color:'#48c458'}}/>
            </Card>
            <Card onClick={linkdln} sx={{padding:"1em",cursor:"pointer",textAlign:"center",boxShadow:"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",transition:"transform 0.2s linear","&:hover":{transform: "translateY(-7px)"}}}>
                <LinkedInIcon fontSize='large' sx={{color:'#0270ad'}}/>
            </Card>
         </Box>
    </Box>
  )
}

export default Contact