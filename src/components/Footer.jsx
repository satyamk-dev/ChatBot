import React from "react";
import { Box, Typography, Container } from "@mui/material";

function Footer() {
  return (

    <Box
      component="footer"
      sx={{
        backgroundColor: "#202123",
        color: "white",
        py: 1,
        textAlign: "center",
        bottom: 0,
        width: "100%"
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2">

          © {new Date().getFullYear()} GeniusAI. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;