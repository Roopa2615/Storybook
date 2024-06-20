// src/components/CommonMenu.tsx
import React, { useState } from "react";
import { Avatar, IconButton, Menu, MenuItem } from "@mui/material";

interface CommonMenuProps {
  avatarSrc?: string;
  menuItems: Array<{
    id: string;
    content: string | React.ReactNode;
    onClick?: () => void;
  }>;
}

const CommonMenu: React.FC<CommonMenuProps> = ({ avatarSrc, menuItems }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton onClick={handleClick}>
        <Avatar src={avatarSrc} />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        {menuItems.map((item) => (
          <MenuItem
            key={item.id}
            onClick={() => {
              item.onClick?.();
              handleClose();
            }}
          >
            {item.content}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default CommonMenu;
