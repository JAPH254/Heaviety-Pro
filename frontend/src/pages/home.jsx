import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer"
import WelcomeSection from "../components/welcomeSection";

function Home () {
    return(
        <>
        <Navbar />
        <WelcomeSection />
        <Footer />
        </>
    );
};

export default Home;