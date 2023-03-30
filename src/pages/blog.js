// Import React & Gatsby.js's Link component

import * as React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import { Hero } from '../components/Hero'
import Typewriter from '../components/Typewriter';
import config from '../utils/config'
import Layout from '../components/Layout'
import { SEO } from '../components/SEO'

// Define your component
const Blog = () => {
  return (
    <Layout> 
      
      <Helmet title={config.siteTitle} />
      <SEO />

      
      <div className="container">
        <div className="hero-wrapper">
          <Hero  index> <h1> <Typewriter text="Blog" /></h1>
            <p className="subtitle">
             <br />
            </p>
          </Hero>
          
          <div>
          </div>
        </div>

        
      </div>
      </Layout>
  )
}

// Export your component
export default Blog