import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import AdvantagesSection from './components/AdvantagesSection'
import TrainingProgramsSection from './components/TrainingProgramsSection'
import CategorySection from './components/CategorySection'
import ProductSection from './components/ProductSection'
function App() {


  return (
    <>
     <Header/>
     <main className='main'>
     <AdvantagesSection/>
      <TrainingProgramsSection/>
      <CategorySection/>
      <ProductSection/>
     </main>
     </>
  )
}

export default App
