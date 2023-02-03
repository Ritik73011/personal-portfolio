import { Box, Typography } from "@mui/material";
const GitHub = () => {
  let graph = {
    maxWidth: "1100px",
    width: "100%",
  };
  return (
    <Box sx={{ marginTop: "80px" }} id="Stats">
      <Typography variant="h4">GITHUB STATS</Typography>
      <Box sx={{ marginTop: "24px" }}>
        <img
          src="https://github-readme-activity-graph.cyclic.app/graph?username=Ritik73011&theme=redical"
          alt="graph"
          style={graph}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "24px",
            margin: "16px auto",
            maxWidth: "1100px",
            width: "100%",
          }}
        >
          <Box sx={{ width: "100%" }}>
            <img
              style={{ width: "100%" }}
              src="https://github-readme-stats.vercel.app/api?username=Ritik73011&show_icons=true&hide_border=true&theme=radical"
              alt="github stats"
            />
          </Box>
          <Box sx={{ width: "100%" }}>
            <img
              style={{ width: "100%" }}
              src="https://github-readme-streak-stats.herokuapp.com/?user=Ritik73011&hide_border=true&theme=radical"
              alt="github stats"
            />
          </Box>
        </Box>
        <img
          src="https://ghchart.rshah.org/Ritik73011"
          alt="Ritik git stats"
          style={{ width: "100%", marginTop: "16px" }}
        />
      </Box>
    </Box>
  );
};

export default GitHub;
