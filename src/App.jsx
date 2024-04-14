import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import AdvantagesSection from './components/AdvantagesSection'
import TrainingProgramsSection from './components/TrainingProgramsSection'
function App() {


  return (
    <>
     <Header/>
     <main className='main'>
     <AdvantagesSection/>
      <TrainingProgramsSection/>
     </main>
     </>
  )
}

export default App
