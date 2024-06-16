import React from 'react'
import Hero from '../components/Hero.jsx'
import About from '../components/About.jsx'
import PopularProudct from '../components/PopularProudct.jsx'
import Offer from '../components/Offer.jsx'

const Home = () => {
  return (
    <>
    <Hero/>
    <About/> 
    <PopularProudct/>
    <Offer/>
    </>
  )
}

export default Home