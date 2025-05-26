import React from 'react'
import Header from './components/header'
import Herobanner from './components/Herobanner'
import ServicePage1 from "./components/servicePage1"
const home = () => {
  return (
    <div>
      <Header/>
      <Herobanner/>
      <ServicePage1/>
    </div>
  )
}

export default home
