import React from 'react'
import Header from '../components/header'
import Herobanner from '../components/Herobanner'
import ServiceHomePage1 from "../components/serviceHomePage1"
import ServiceHomePage2 from "../components/serviceHomePage2"
import TeamMembers from '../components/TeamMembers'
import Footer from '../components/Footer'
import News from '../components/News'
import CaseStudies from '../components/CaseStudies'
const home = () => {
  return (
    <div class="bg-gray-50">
      <Header/>
      <Herobanner/>
      <ServiceHomePage1/>
      <ServiceHomePage2/>
      <CaseStudies/>
      <TeamMembers/>
      <News/>
      <Footer/>
    </div>
  )
}

export default home
