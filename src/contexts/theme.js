import { createContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

// create a new context for the theme
const ThemeContext = createContext()

// provides theme info to its children
const ThemeProvider = ({ children }) => {
  
  // state variable to store current theme name
  const [themeName, setThemeName] = useState('light')

  // listen for changes dark or light
  useEffect(() => {

    // matchMedia object to get the preferred color scheme
    const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
     
    // set the initial theme name based on the preferred color scheme
    setThemeName(darkMediaQuery.matches ? 'dark' : 'light')
    
    // event listener to change the theme name when the preferred color scheme changes
    darkMediaQuery.addEventListener('change', (e) => {
      setThemeName(e.matches ? 'dark' : 'light')
    });
  }, [])

  const toggleTheme = () => {
    // determine the new theme name 
    const name = themeName === 'dark' ? 'light' : 'dark'

     // store the new theme name in local storage
    localStorage.setItem('themeName', name)

    // update the theme name in state
    setThemeName(name)
  }

    // return the ThemeContext.Provider component with the theme information as its value
  return (
    <ThemeContext.Provider value={[{ themeName, toggleTheme }]}>
      {children}
    </ThemeContext.Provider>
  )
}

// propTypes validation for the children prop
ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export { ThemeProvider, ThemeContext }
