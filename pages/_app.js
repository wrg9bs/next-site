import React, { useState, useEffect } from 'react'
import '../style/main.scss'
import { PortfolioProvider } from '../context/context'
import { heroData, aboutData, projectsData, contactData, footerData } from '../data/data'
import Home from './index'
import About from './about'
import Projects from './projects'
import Contact from './contact'
import Footer from '../components/footer/footer'
import Menu from '../components/menu/menu'
import Navbar from '../components/navbar/navbar'




function MyApp({ Component, pageProps }) {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);
  
  return (
    <PortfolioProvider value={{ hero, about, projects, contact, footer }}>
      <Navbar />
      <Menu />
      <div className='sections'>
          <Home />
          <About />
          <Projects />
          <Contact />
      </div>
      <Footer />
      
    </PortfolioProvider>  
  )
}

export default MyApp
