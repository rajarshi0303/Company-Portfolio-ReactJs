import React from 'react'
import Navbar from '../layout/Navbar'
import Hero from '../components/Hero'
import AboutContent from '../components/AboutContent'
import Services from '../components/Services'
import Portfolio from '../components/Portfolio'
import FAQ from '../components/FAQ'
import Team from '../components/Team'
import Clients from '../components/Clients'
import Contact from '../components/Contact'
import Subscribe from '../components/Subscribe'
import Footer from '../layout/Footer'

export default function HomePage() {
    return (
        <div>
            <Navbar />
            <Hero />
            <AboutContent />
            <Services />
            <Portfolio />
            <FAQ />
            <Team />
            <Clients />
            <Contact />
            <Subscribe />
            <Footer />
        </div>
    )
}
