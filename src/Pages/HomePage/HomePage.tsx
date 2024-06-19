import { Box } from "@mui/material";
import React from "react";
import { HomePageProps } from "./HomePage.stories";
import Header from "../../Organisms/Header/Header";
import Footer from "../../Organisms/Footer/Footer";
import HomeComponent from "../../Templates/Home/Home";

const HomePage: React.FC<HomePageProps> = ({ backgroundColor, ...props }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: { backgroundColor },
      }}
    >
      <Box sx={{ position: "fixed", top: "0px", width: "100%", left: 0 }}>
        <Header backgroundColor="#8700ff" color="#FFF" />
      </Box>
      <Box sx={{ marginTop: "140px"}}>
        <HomeComponent />
      </Box>
      <Box sx={{ position: "fixed", bottom: "0px", width: "100%", left: 0 }}>
        <Footer backgroundColor="#8700ff" />
      </Box>
    </Box>
  );
};

export default HomePage;
