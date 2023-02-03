import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { image, name, summary } from "../../info";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DownloadIcon from "@mui/icons-material/Download";
import "./About.css";
const About = () => {
  const media = useMediaQuery("(max-width:600px)");

  const downloadResume = ()=>{
    window.open('https://drive.google.com/file/d/1reUkdHLMHBh4_hGiyT9uhqvTZg1k4PAR/view?usp=sharing','_blank');
  }
  const gitClick = ()=>{
    window.open('https://github.com/Ritik73011','_blank');
  }
  const linkdlnClick = ()=>{
    window.open('https://www.linkedin.com/in/ritik-kumar-singh-161618208/','_blank');
  }
  const WhatsAppMe = ()=>{
    window.open('https://wa.me/919304613678','_blank');
  }
  return (
    <Box
      sx={{
        display: media ? "grid" : "flex",
        justifyContent: "space-around",
        gap: "16px",
        textAlign: media ? "center" : "left",
        maxWidth:"1400px",
        margin:"0 auto"
      }}
      id="About"
    >
      <Box sx={{ maxWidth: media ? "100%" : "60%", width: "100%" }}>
        <Typography variant={media?"h5":"h4"} sx={{marginBottom:media?"0":"8px"}}>HELLO,</Typography>
        <Typography variant={media?"h4":"h3"} sx={{ marginTop: "10px",display:media?"block":"inline" }}>
          I am{" "}
        </Typography>
          <Typography
            variant={media?"h4":"h3"}
            sx={{ display: "inline", color: "primary.main", fontWeight: media?"600":"600" }}
          >
            {name}
          </Typography>
        <Typography sx={{ marginTop: "20px" }}>{summary}</Typography>
        <Box sx={{ display:media?"block":"none", maxWidth: media ? "100%" : "40%", width: "100%",marginTop:"20px" }}>
        <Box
          sx={{
            maxWidth: "320px",
            margin: "auto",
            width: "100%",
            borderRadius: "36px",
            bgcolor: "primary.main",
          }}
        >
          <img className="profile" src={image} alt={name} />
        </Box>
      </Box>
        <Box
          sx={{
            display: "grid",
            maxWidth: "300px",
            margin:media?"auto":"",
            width: "100%",
            gap: "16px",
            marginTop: "24px",
          }}
        >
          <Button variant="outlined" onClick={downloadResume}>
            <DownloadIcon sx={{ marginRight: "8px", color:"#f4a104" }} /> Resume
          </Button>
          <Button variant="outlined" onClick={gitClick}>
            <GitHubIcon sx={{ marginRight: "8px" }} /> GitHub
          </Button>
          <Button variant="outlined" onClick={linkdlnClick}>
            <LinkedInIcon sx={{ marginRight: "8px",color:'#0270ad' }} /> LinkedIn
          </Button>
          <Button variant="outlined" onClick={WhatsAppMe}>
            <WhatsAppIcon sx={{ marginRight: "8px",color:'#48c458' }} /> WhatsApp
          </Button>
        </Box>
      </Box>
      <Box sx={{ display:media?"none":"block", position:"relative",maxWidth: media ? "100%" : "40%", width: "100%" }}>
        <Box
          sx={{
            position:"absolute",
            maxWidth: "320px",
            right:"0px",
            width: "100%",
            borderRadius: "36px",
            bgcolor: "primary.main",
          }}
        >
          <img className="profile" src={image} alt={name} />
        </Box>
      </Box>
    </Box>
  );
};

export default About;
