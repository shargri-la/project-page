import React, { useState, useEffect } from 'react';
import Hero from './Hero/Hero';
// import About from './About/About';
import Team from './Team/Team';
import Projects from './Projects/Projects';
// import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

import { PortfolioProvider } from '../context/context';

import { heroData, teamData, projectsData, footerData } from '../mock/data';

function App() {
  const [hero, setHero] = useState({});
  // const [about, setAbout] = useState({});
  const [team, setTeam] = useState({});
  const [projects, setProjects] = useState([]);
  // const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    // setAbout({ ...aboutData });
    setTeam({ ...teamData });
    setProjects([...projectsData]);
    // setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioProvider value={{ hero, team, projects, footer }}>
      <Hero />
      <Team />
      <Projects />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
