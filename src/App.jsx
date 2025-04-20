import React from "react";
import Navbar from "./sections/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Projects from "./sections/Projects.jsx";
import Contacts from "./sections/Contacts.jsx";
import Footer from "./sections/Footer.jsx";
import Experience from "./sections/Experience.jsx";
import WorkExperience from "./sections/Experience.jsx";


const App = () => {
  return (
    <main className="max-w-7xl mx-auto">
      <Navbar />
      <Hero />
      <About />
      <Projects/>
      <WorkExperience/>
      <Contacts/>
      <Footer/>
      
    </main>
  );
};

export default App;
