import React from "react";
import Header from "../components/Header";
import RulesMain from "../components/mains/RulesMain";
import BannerHeader from "../components/BannerHeader";
import "../styles/responsive/game-responsive.css";
import "../styles/rules.css";

function RulesPage() {
    return (
        <div>
            <Header>
                <BannerHeader />
            </Header>
            <RulesMain />
        </div>
    );
}

export default RulesPage;
