import React, { useState } from "react";
import "./components/Default.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/MainContent/Main";
import MainCard from "./components/UI/MainCard";

import SideNavigation from "./components/SideNavigation/SideNavigation";

function App() {
  const [mode, setMode] = useState("Home");

  const findMode = (value) => {
    setMode(value.target.textContent);
  };

  return (
    <>
      <Header findMode={findMode} />
      <MainCard>
        <SideNavigation />
        <Main mode={mode} />
      </MainCard>
      <Footer />
    </>
  );
}

export default App;
