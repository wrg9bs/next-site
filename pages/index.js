import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import React, { useEffect, useRef, useState, useContext } from 'react'
import { init } from 'ityped'
import { Container } from 'react-bootstrap'
import Fade from 'react-reveal/Fade'
import {PortfolioContext} from '../context/context'


const Home = () =>  {
  const { hero } = useContext(PortfolioContext);
  const { title, name, cta } = hero;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      typeSpeed: 100,
      backDelay: 2000,
      backSpeed: 60,
      strings: ["I'm a Full Stack Developer", 'Problem Solver', 'Programming enthusiast'],
    });
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, [])

  return (
    <section id="hero" className="jumbotron">
    <Container>
      <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
        <h1 className="hero-title">
        {title || 'Hi, my name is'} <span className="text-color-main">{name || 'Bo-at'}</span>
          <br />
          <span ref={textRef} />
        </h1>
      </Fade>

      <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
        <p className="hero-cta">
          <span className="cta-btn cta-btn--hero">
            <Link href="/about">
              <a smooth duration={1000}>
              {cta || 'Know more'}
              </a>
            </Link>
          </span>
        </p>
      </Fade>
    </Container>
  </section>
  )
}
export default Home;