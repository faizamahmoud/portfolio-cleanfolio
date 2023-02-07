import React from 'react'
import Home from '../Home/Home'
import Projects from '../Projects/Projects'
import Contact from '../Contact/Contact'
import AboutMe from '../AboutMe/AboutMe'
import { Routes, Route } from 'react-router-dom'

export const Main = () => {
    return (
        <main>
        <Routes>
            
            <Route path="/" element={<Home />} />
            <Route path="/projects" element= {<Projects />} />
            <Route path="/about" element= {<AboutMe />} />
                
                {/* <Contact /> */}
            
        </Routes>
        </main>

    )
}

export default Main;



