 
// Import React & Gatsby.js's Link component

import * as React from 'react'
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from '../components/Layout'
import { Hero } from '../components/Hero'
import heroImage from '../assets/me.png'

// Define your component
const IndexPage = ({data}) => {
  const projects = data.allMarkdownRemark.nodes
  return (
    <Layout> 
   
    
      <div className="container">
        <div className="hero-wrapper">
          <Hero  index> <h1> Hey, I'm Kyle!</h1>
            <p className="subtitle">
              Welcome to my digital dojo ❤️<br /> <br />
              I'm a Network Engineer in the Chicago area. I'm passionately making open source <a>projects</a>, pushing technogy to its limits, and making technology more accessible to all. 
              
            </p>
          </Hero>
          <div className='hero-image'><img src={heroImage} alt="Photo of myself" /></div>
        </div>
      </div>

      <div className="container">
      <h1 className="main-content">Everything Open-Source</h1>
        <div className="list-wrapper">
        
        
        <div className="list-item">
          <div className='list-content'>
            <h2>About Me</h2>
            <p >
            Whatever the project, I strive to exceed expectations and to do my best everytime. When I'm not working, you can find me practicing music.
            </p><br />
            <Link style={{ textDecoration: 'none' }} to='/me'>Learn More</Link>
            </div>
            </div>
        
            <div  className="list-item">
              <div className='list-content'>
            <h2>Engineering</h2>
            <p>Looking to hire a Network Engineer, or Software developer? Click on the link below to send me an email, I'd love to help bring your vision to life!
            </p><br />
            <a href='mailto:hello@kylefleishman.com'> Hire an engineer</a>
            </div>
            </div>

           

            <div  className="list-item">
            <div className='list-content'>
            <h2>Projects</h2>
            <p>Take a look at a showcase of my completed projects that I've done for my clients and take a glimpse into the development process.<br />
            </p>
            <Link style={{ textDecoration: 'none' }} to='/projects'>View Projects</Link>
            </div>
            </div>
        </div>


        <h1 className="main-content">Projects</h1>
      </div>

     
<div className="container">
<div className="index-project-wrapper">
{projects.map(project => {
  let projectImage = getImage(project.frontmatter.projectImage?.childImageSharp?.gatsbyImageData)

  return (
  
    <div className="project-images">
    <Link style={{ textDecoration: 'none' }} to={project.frontmatter.slug}>   <div className="content-image"><GatsbyImage image={projectImage}/></div> </Link>
    <Link style={{ textDecoration: 'none' }} to={project.frontmatter.slug}>
      <h2>{project.frontmatter.title}</h2>
    </Link>
    </div>
 
  )
})}
 </div>
</div>
   

    <div className="container">
        <div className="contact-wrapper">
          <div className='contact'> <h1>Reach Out</h1>
            <p className="subtitle">
              Feel free to reach out! You can contact me by email at <b>hello</b> at <b>kylefleishman.com</b> to say hi or shoot over a question! I love meeting new people and learning about new opportunities.
              
            </p>
          </div>

        </div>

        
      </div>
      
  
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query CabinsQuery {
    allMarkdownRemark (filter: { frontmatter: { title: { ne: "Kyle Fleishman" } } }) {
      nodes {
        frontmatter {
          order
          slug
          title
          projectImage {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`
