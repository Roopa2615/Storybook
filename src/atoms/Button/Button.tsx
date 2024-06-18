import React, { ReactNode } from "react";
import { Button as ButtonComponent } from "@mui/material";

export interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant='primary',
  onClick,
  ...props
}) => {

  return (
    <ButtonComponent
      {...props}
      onClick={onClick}
      sx={{
        backgroundColor: variant === "primary" ? "blue" : "red",
        color: "white",
        padding: "10px",
        borderRadius: "50px",
        border:'none',
        textTransform:'capitalize',
        '&:hover': {
          backgroundColor: variant === "primary" ? "blue" : "red", // Same color as the background to remove hover effect
          boxShadow: 'none', // Remove box shadow if any
        },
      }}
    >
      {children}
    </ButtonComponent>
  );
};
