import React from "react";
import Header from "../components/Header";
import HomeMain from "../components/mains/HomeMain";

import "../styles/responsive/index-responsive.css";
import "../styles/index.css";

function HomePage() {
  return (
    <div>
      <Header />
      <HomeMain />
      Home Page
    </div>
  );
}

export default HomePage;
