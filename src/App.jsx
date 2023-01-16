import { useState } from 'react'

import Header from "../src/components/sections/Header";


import Articles from "../src/components/sections/Articles";
import SectionSlider from "../src/components/sections/SectionSlider";
import SectionHabitaciones from "../src/components/sections/SectionHabitaciones";
import SectionOtherServices from "../src/components/sections/SectionOtherServices";
import Footer_1 from "./components/sections/Footer_1";
import SectionLogo from './components/sections/SectionLogo';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    
    <SectionSlider/>
   
    <SectionHabitaciones/>
    <SectionOtherServices/>
    <Articles/>
   <SectionLogo/>
   <Footer_1/>
    </>
  )
}

export default App
