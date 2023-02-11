import React from 'react'
import Banner from '../components/Banner'
import Apishortner from '../components/Apishortner'
import Header from '../components/Header'
import Hero from '../components/Hero'

import Footer from '../components/Footer'
const Home = () => {
  return (
    <>
        <Header/>
        <Hero />
        <Apishortner/>
        
        <Banner />
        <Footer/>
    </>
  )
}

export default Home