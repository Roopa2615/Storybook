import { Box } from "@mui/material";
import React from "react";
import { FooterProps } from "./Footer.stories";
import Typography from "../../atoms/Typography/Typography";

const Footer: React.FC<FooterProps> = ({ ...props }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "80px",
        backgroundColor: "#8700ff",
        padding: "20px",
        color: "#000000",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Typography variant="body1" {...props}>
          &copy; CopyRight
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
