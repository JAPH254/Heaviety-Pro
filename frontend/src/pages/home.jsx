import React from "react";
import Navbar from "../components/navbar.jsx";
import Footer from "../components/footer.jsx"
import WelcomeSection from "../components/welcomeSection.jsx";

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