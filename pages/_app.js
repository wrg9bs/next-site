import React, { useState } from 'react'
import '../styles/globals.css'
import { PortfolioProvider } from '../context/context'

function MyApp({ Component, pageProps }) {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});
  
  return (
    <PortfolioProvider value={{ hero, about, projects, contact, footer }}>
      <Component {...pageProps} />
    </PortfolioProvider>  
  )
}

export default MyApp
