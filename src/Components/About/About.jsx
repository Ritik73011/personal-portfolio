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
  return (
    <Box
      sx={{
        display: media ? "grid" : "flex",
        justifyContent: "space-around",
        gap: "16px",
        textAlign: media ? "center" : "left",
      }}
    >
      <Box sx={{ maxWidth: media ? "100%" : "60%", width: "100%" }}>
        <Typography variant={media?"h5":"h4"}>HELLO</Typography>
        <Typography variant={media?"h4":"h3"} sx={{ marginTop: "10px" }}>
          I am{" "}
          <Typography
            variant="h3"
            sx={{ display: "inline", color: "primary.main", fontWeight: media?"500":"600" }}
          >
            {name}
          </Typography>
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
          <Button variant="outlined">
            <DownloadIcon sx={{ marginRight: "8px" }} /> Resume
          </Button>
          <Button variant="outlined">
            <GitHubIcon sx={{ marginRight: "8px" }} /> GitHub
          </Button>
          <Button variant="outlined">
            <LinkedInIcon sx={{ marginRight: "8px" }} /> LinkedIn
          </Button>
          <Button variant="outlined">
            <WhatsAppIcon sx={{ marginRight: "8px" }} /> WhatsApp
          </Button>
        </Box>
      </Box>
      <Box sx={{ display:media?"none":"block", maxWidth: media ? "100%" : "40%", width: "100%" }}>
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
    </Box>
  );
};

export default About;
