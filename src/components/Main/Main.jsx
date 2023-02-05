import React from 'react'
import About from '../About/About'
import Projects from '../Projects/Projects'
import Skills from '../Skills/Skills'
// import ScrollToTop from '../ScrollToTop/ScrollToTop'
import Contact from '../Contact/Contact'
// import Footer from '../Footer/Footer'
import { Routes, Route } from 'react-router-dom'

export const Main = () => {
    return (
        <main>
        <Routes>
            
            <Route path="/about" element={<About />} />
            <Route path="/projects" element= {<Projects />} />
                {/* <Skills />   combine with projects */}
                {/* <Contact /> */}
            
        </Routes>
        </main>

    )
}

export default Main;



