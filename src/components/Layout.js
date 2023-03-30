//layouts are what groups all of the components
//into one individual page for gatsby
import Helmet from 'react-helmet'
import React, { useState } from 'react'
import { useLocation } from '@reach/router'
import { Link } from 'gatsby'
import favicon from '../assets/blue-potion.png'
import { Nav } from './Nav'
import { Navigation } from './Navigation'
import { Sidebar } from './Sidebar'
import {container} from "../style.css"
import { FileHeader } from './FileHeader'
import { About } from '../components/About'
import statements from '../assets/about-me';
import { Footer } from './Footer'

import '../light.css'

function setDarkTheme(setTheme) {
  localStorage.setItem('theme', 'dark')
  setTheme('dark')
  document.body.style.backgroundColor = '#272727'
}

function setLightTheme(setTheme) {
  localStorage.setItem('theme', 'light')
  setTheme('light')
  document.body.style.backgroundColor = 'white'
}

function getMainClass(theme, collapsed, slug) {
  let classString = 'theme'
  classString += ` ${theme}`

  if (collapsed) {
    classString += ' collapsed'
  }

  return classString
}

export const Layout = ({ children }) => {
  const location = useLocation()
  const [theme, setTheme] = useState('dark')
  const [collapsed, setCollapsed] = useState(false)
  const slug = location.pathname

  const onUpdateTheme = (theme) => {
    theme === 'dark' ? setLightTheme(setTheme) : setDarkTheme(setTheme)
  }
  return (
    <div>
    <Helmet>
      
      <link rel="shortcut icon" type="image/png" href={favicon} />
      {theme === 'dark' && (
        <link rel="stylesheet" type="text/css" href="/dark-mode.css" />
      )}
    </Helmet>
   
    <div id="layout" className="layout">
    <Navigation setCollapsed={setCollapsed}
      onUpdateTheme={() => onUpdateTheme(theme)}
      theme={theme} />
    <main>{children}</main>
    
    <Footer />
    </div>
    </div>
  )
}
export default Layout