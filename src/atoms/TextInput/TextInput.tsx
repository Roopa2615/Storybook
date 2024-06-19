import React from "react";
import { InputAdornment, TextField } from "@mui/material";
import Icon from "../Icons/Icons";

export interface TextInputProps {
  label?: string;
  type?: "text" | "password" | "email" | "number";
  value: string | number | undefined;
  variant: "outlined" | "filled" | "standard";
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  width?: string;
  inputProps?: any;
}

const TextInput: React.FC<TextInputProps> = ({
  label = "TextField",
  type = "text",
  value,
  variant,
  onChange,
  placeholder,
  width = "100%",
  inputProps,
  ...props
}) => {
  return (
    <TextField
      {...props}
      placeholder={placeholder}
      variant={variant}
      label={label}
      type={type}
      value={value}
      onChange={onChange}
      sx={{ width: { width } }}
      fullWidth
      InputProps={inputProps}
    />
  );
};

export default TextInput;
