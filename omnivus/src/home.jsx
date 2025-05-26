import React from 'react'
import Header from './components/header'
import Herobanner from './components/Herobanner'
import ServiceHomePage1 from "./components/serviceHomePage1"
import ServiceHomePage2 from "./components/serviceHomePage2"
import TeamMembers from './components/TeamMembers'
import Footer from './components/Footer'
const home = () => {
  return (
    <div class="bg-gray-50">
      <Header/>
      <Herobanner/>
      <ServiceHomePage1/>
      <ServiceHomePage2/>
      <TeamMembers/>
      <Footer/>
    </div>
  )
}

export default home
