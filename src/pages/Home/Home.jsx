import React from "react";
import Banner from "../Banner/Banner";
import ContactMe from "../ContactMe/ContactMe";
import Footer from "../Footer/Footer";

import MyExperience from "../MyExperience/MyExperience";
import Projects from "../Projects/Projects";

const Home = () => {
  return (
    <div className="bg-dark p-5  rounded rounded-3 text-white">
      <Banner />
      <MyExperience />
      <Projects />
      <ContactMe />
      <Footer />
    </div>
  );
};

export default Home;
