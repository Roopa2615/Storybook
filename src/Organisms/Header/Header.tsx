import React from "react";
import { Box } from "@mui/material";
import { HeaderProps } from "./Header.stories";
import Typography from "../../atoms/Typography/Typography";
import Icon from "../../atoms/Icons/Icons";

const Header: React.FC<HeaderProps> = ({
  backgroundColor,
  color,
  ...props
}) => {
  let user = "John";
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        height: "80px",
        backgroundColor: { backgroundColor },
        padding: "20px",
        color: { color },
      }}
      {...props}
    >
      <Box sx={{ width: "100%" }}>
        <Typography variant="h3" sx={{ fontStyle: "italic", fontWeight: 500 }}>
          Story Book
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "80%",
          alignItems: "center",
          gap: "40px",
          justifyContent: "flex-end",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <Icon name="user" width="25" height="25"></Icon>
          <Typography variant="body1">Hello, {user}</Typography>
        </Box>
        <Box>
          <Typography variant="body1">My Account</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
