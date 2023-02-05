import { useContext } from 'react'
import { ThemeContext } from './contexts/theme'
import Header from './components/Header/Header'

import Main from './components/Main/Main'
import './App.css'
import ReactGA from 'react-ga';

const TRACKING_ID = "UA-247358619-1"; 
ReactGA.initialize(TRACKING_ID);

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)

  return (
    <div id='top' className={`${themeName} app`}>
      <Header />
<Main />
      
      
    </div>
  )
}

export default App
