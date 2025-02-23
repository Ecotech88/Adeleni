import { useState } from 'react'
import Navbar from './Component/Navbar'
import Hero from './Component/Hero'
import About from './Component/About'
import Technology from './Component/Technology'
import Experience from './Component/Experience'
import Projects from './Component/Projects'
import Contact from './Component/Contact'


function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div className='overflow-x-hidden antialiased 
      selection:bg-cyan-300 selection:text-cyan-900'>
        <div className='fixed top -z-10 h-full w-full'>
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div></div>
        </div>
       
        <div className="container mx-auto px-8">
        <Navbar/>
        <Hero/>
        <About/>
        <Technology/>
        <Experience/>
        <Projects/>
        <Contact/>
        </div>
        
    </div>
  )
}

export default App
