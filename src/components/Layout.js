//layouts are what groups all of the components
//into one individual page for gatsby
import Helmet from 'react-helmet'
import React, { useState } from 'react'
import { useLocation } from '@reach/router'
import { SEO } from '../components/SEO'
import config from '../utils/config'
import favicon from '../assets/blue-potion.png'
import { Navigation } from './Navigation'
import { Footer } from './Footer'
import '../style.css'




export const Layout = ({ children }) => {
  const location = useLocation()
  const [theme, setTheme] = useState('dark')
  const [collapsed, setCollapsed] = useState(false)
  const slug = location.pathname

  
  return (
    <div>
    
   
    <div id="layout" className="layout">
    <Helmet title={config.siteTitle} />
      <SEO />
     <Navigation 
      theme={theme} />
    <main>{children}</main>
    
    <Footer />
    </div>
    </div>
  )
}
export default Layout