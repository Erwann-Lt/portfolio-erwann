import React from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'

const App=()=> {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">  
    <div style="text-align: center bg-black">
        <h1 class="text-green-600 
                text-3xl font-bold">
            GeeksforGeeks
        </h1>
        <h3 class="text-xl text-white">
            Bienvenue
        </h3>
    </div>
    <div class="relative flex items-center 
        justify-center h-screen overflow-hidden">
        <video src=
        "https://assets.mixkit.co/videos/preview/mixkit-happy-man-running-at-low-tide-21706-large.mp4"
            autoplay="{true}" loop muted
            className="absolute z-10 w-auto 
            min-w-full min-h-full max-w-none">
        </video>
    </div>
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
    </main>
  );
}

export default App
