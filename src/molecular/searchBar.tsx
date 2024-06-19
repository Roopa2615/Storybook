import React from "react";
import { SearchBarProps } from "./searchBar.stories";
import { Box, InputAdornment } from "@mui/material";
import TextInput from "../atoms/TextInput/TextInput";
import { Button } from "../atoms/Button/Button";
import SearchIcon from '@mui/icons-material/Search';

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder,
  value,
  type,
  buttonVariant = "primary",
  InputVariant = "outlined",
  onChange,
  onClick,
  children,
  label,
  inputWidth,
  ...props
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        gap: "10px",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "80%",
        }}
      >
        <TextInput
        {...props}
          variant={InputVariant}
          placeholder={placeholder}
          type={type}
          value={value}
          onChange={onChange}
          label={label}
          width={inputWidth}
          inputProps={{
            startAdornment: (
              <InputAdornment position="start">
               <SearchIcon />
              </InputAdornment>
            )
          }}
        />
      </Box>
      <Box
        sx={{
          width: "20%",
        }}
      >
        <Button variant={buttonVariant} onClick={onClick} {...props}>
        </Button>
      </Box>
    </Box>
  );
};

export default SearchBar;
