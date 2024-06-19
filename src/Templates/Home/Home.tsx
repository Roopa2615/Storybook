import { Box } from "@mui/material";
import React, { useState } from "react";
import { HomeComponentProps } from "./Home.stories";
import SearchBar from "../../molecular/searchBar";

const HomeComponent: React.FC<HomeComponentProps> = ({
  backgroundColor,
  ...props
}) => {
  const [value, setValue] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleClick = () => {
    if (value) {
      setSearchValue(value);
      setValue("");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: "10px",
        backgroundColor: { backgroundColor },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: { backgroundColor },
          alignItems: "center",
          justifyContent:'center'
        }}
      >
        <SearchBar
          onChange={(e) => handleChange(e)}
          onClick={handleClick}
          value={value}
          width="50%"
        >
          Search
        </SearchBar>
      </Box>
    </Box>
  );
};

export default HomeComponent;
