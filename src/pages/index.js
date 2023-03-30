 
// Import React & Gatsby.js's Link component

import * as React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import Typewriter from '../components/Typewriter';
import config from '../utils/config'
import Layout from '../components/Layout'
import { SEO } from '../components/SEO'
import { Hero } from '../components/Hero'
import heroImage from '../assets/me.png'
import openbible from '../assets/openbible.png'
import dalens from '../assets/dalens.png'

// Define your component
const IndexPage = () => {
  return (
    <Layout> 
   
      <Helmet title={config.siteTitle} />
      <SEO />

      <div className="container">
        <div className="hero-wrapper">
          <Hero  index> <h1> <Typewriter text="Hey, I'm Kyle!" /></h1>
            <p className="subtitle">
              Welcome to my digital dojo ❤️<br /> <br />
              I'm a Network Engineer in the Chicago area. I'm passionately making open source <a>projects</a>, pushing technogy to its limits, and making technology more accessible to all. 
              
            </p>
          </Hero>
          <div className='hero-image'><img src={heroImage} alt="Photo of myself" /></div>
        </div>
      </div>

      <div className="container">
      <h1 className="main-content"><Typewriter text="Everything Open-Source." /></h1>
        <div className="list-wrapper">
        
        
        <div className="list-item">
            <h2>About Me</h2>
            <p >
            Whatever the project, I strive to exceed expectations and bring the vision to life. When I'm not working, you can find me practicing my singing.<br />
            </p>
            <a href='/me'>Learn more</a>
            </div>
        
            <div className="list-item">
            <h2>Engineering</h2>
            <p>Looking to hire a Network Engineer, web developer, or you have a question that needs to be answered? Reach out!<br />
            </p>
            <a href='mailto:hello@kylefleishman.com'> Hire an engineer</a>
            </div>

           

            <div className="list-item">
            <h2>Projects</h2>
            <p>Take a look at a showcase of my completed projects that I've done either to study new concepts or for the latest gig.<br />
            </p>
            <a href='/projects'>view projects</a>
            </div>
            
        </div>
      </div>

      <div className="container">
       <h1 className="main-content"><Typewriter text="Past Work & Projects" /></h1>
        <div className="project-wrapper">
        <div>
        <div className='content-image'><img src={openbible} alt="Photo of the front page of the Open Bible Streator website" /></div>
        <h2><strong>Open Bible Streator</strong></h2>
           
            </div>
            

            
            <div >
            <div className='content-image'><img src={dalens} alt="Photo of the front page of the Dalen's Resort website" /></div>
            <h2>Dalen's Resort</h2>
            
            </div>
            
            </div>
      </div>
   

    <div className="container">
        <div className="contact-wrapper">
          <div className='contact'> <h1> <Typewriter text="Let's get in touch!" /></h1>
            <p className="subtitle">
              Feel free to reach out! You can contact me by email at <b>hello</b> at <b>kylefleishman.com</b> to say hi or shoot over a question! I love meeting new people and learning about new oppurtunities.
              
            </p>
          </div>

        </div>
      </div>
      
  
    </Layout>
  )
}

export default IndexPage