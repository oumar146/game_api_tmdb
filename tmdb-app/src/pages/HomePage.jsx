import React from "react";
import Header from "../components/Header";
import HomeMain from "../components/mains/HomeMain";
import BannerHeader from "../components/BannerHeader";
import "../styles/responsive/index-responsive.css";
import "../styles/index.css";

function HomePage() {
    return (
        <div>
            <Header>
                <BannerHeader />
            </Header>
            <HomeMain />
        </div>
    );
}

export default HomePage;
