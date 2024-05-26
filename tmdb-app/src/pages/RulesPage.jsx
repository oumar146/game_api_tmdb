import React from "react";
import Header from "../components/Header";
import RulesMain from "../components/mains/RulesMain";
import "../styles/responsive/index-responsive.css";
import "../styles/index.css";

function RulesPage() {
    return (
        <div>
            <Header />
            <RulesMain />
        </div>
    );
}

export default RulesPage;
