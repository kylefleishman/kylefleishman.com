// Import React & Gatsby.js's Link component

import * as React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import { Hero } from '../components/Hero'
import Typewriter from '../components/Typewriter';
import config from '../utils/config'
import Layout from '../components/Layout'
import { SEO } from '../components/SEO'
import heroImage from '../assets/me.png'
import openbible from '../assets/openbible.png'
import dalens from '../assets/dalens.png'
import kylefleishman from '../assets/kylefleishman.png'

// Define your component
const Projects = () => {
  return (
    <Layout> 
      
      <Helmet title={config.siteTitle} />
      <SEO />

      <div className="container">
        
        
          <Hero  index> <h1> <Typewriter text="Projects" /></h1>
          </Hero>
         
        
      </div>

      <div className="container">
        <div className="project-wrapper">
        <div className='project-image'><img src={dalens} alt="Photo of the front page of the Dalen's Resort website" /></div>
        <div className='project-content'> <h1>Dalen's Resort</h1>
          <p className="subtitle">
          This was one of the first websites I created as a web designer and developer. It was a great learning experience for me as it allowed me to apply my education in web design and development to create a website for a client. From the first meetings with the client to the low and high-fidelity mockups, it was a rewarding experience to bring the client's vision to life.
            </p>
            </div>
         
          <div>
          </div>
        </div>

        <div className="project-wrapper">
        
        <div className='project-content'><h1>Open Bible Streator</h1>
        <p className="subtitle">
        This website was the culmination of my experience as a freelance web designer and developer. It was a great opportunity to put all of my skills and lessons learned into practice, working with clients to create a beautiful and well-executed project. The end result was a website that met the content's goals and exceeded their expectations.
          </p>
          </div>
       
        <div>
        </div>
        <div className='project-image'><img src={openbible} alt="Photo of the front page of the Open Bible Streator website" /></div>
      </div>
      <div className="project-wrapper">
        <div className='project-image'><img src={kylefleishman} alt="Photo of the front page of kylefleishman.com" /></div>
        <div className='project-content'> <h1>KyleFleishman.com</h1>
          <p className="subtitle">
          My first major website built with Gatsby, this project was a tremendous learning experience for me. The website was designed to serve as my portfolio, blog, and showcase my projects to the world. The website allowed me to experiment with different web development techniques and refine my design skills, resulting in a visually stunning website I am more than proud of.
            </p>
            </div>
         
          <div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="contact-wrapper">
          <div className='contact'> <h1> <Typewriter text="Like what you see?" /></h1>
            <p className="subtitle">
              Feel free to reach out! You can contact me by email at <b>hello</b> at <b>kylefleishman.com</b> to say hi or shoot over a question! I'm always looking for my next project to expand my experience and expertise.
              
            </p>
          </div>

        </div>
      </div>
      
      </Layout>
  )
}

// Export your component
export default Projects