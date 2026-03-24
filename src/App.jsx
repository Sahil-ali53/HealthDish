import React from 'react'
import Header from './Components/Header'
import Hero from './Components/Hero'
import Features from './Components/Feature'
import HowItWorks from './Components/HowItWorks'
import FeaturedDishes from './Components/FeaturesDish'
import CallToAction from './Components/CallToAction'
import Testimonial from './Components/Testimonial'
import Footer from './Components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <FeaturedDishes />
        <CallToAction />
        <Testimonial />
      </main>
      <Footer />

    </>
  )
}
