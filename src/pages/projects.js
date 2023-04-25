// Import React & Gatsby.js's Link component

import * as React from 'react'
import { graphql, Link } from "gatsby"
import { Hero } from '../components/Hero'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from '../components/Layout'


// Define your component
const Projects = ({data}) => {
  const projects = data.allMarkdownRemark.nodes
  return (
    <Layout> 
      
      

      <div className="container">
        
        
          <Hero  index> <h1> Projects</h1>
          </Hero>
         
        
      </div>

      <div className="container">
        <div className="project-wrapper">
              
        {projects.map(project => {
        let projectImage = getImage(project.frontmatter.projectImage?.childImageSharp?.gatsbyImageData)

        return (
        <div >
          <div className="project-image">
          <Link style={{ textDecoration: 'none' }} to={project.frontmatter.slug}>  
           <GatsbyImage image={projectImage}/> </Link>
           </div>
           <div className='project-content'>
          <Link style={{ textDecoration: 'none' }} to={project.frontmatter.slug}>
            <h2>{project.frontmatter.title}</h2>
          </Link>
          </div>
          </div>
      
        )
      })}
        </div>
      </div>

    
      <div className="container">
        <div className="contact-wrapper">
          <div className='contact'> <h1>Future Projects</h1>
            <p className="subtitle">
              At this time I am currently studying to obtain my CCNA, and do not have any major projects in development.
              Although I am always looking to put my skills to use, and if you want to contact me in regards to developing a website or enterprise network or have any questions, feel free to send me an email at <b>hello</b> at <b>kylefleishman.com</b>.
              
            </p>
          </div>

        </div>
      </div>
      
      
      </Layout>
  )
}

// Export your component
export default Projects

export const query = graphql`
  query CabinsQuery {
    allMarkdownRemark (sort: { frontmatter: { order: ASC } }, limit: 6) {
      nodes {
        frontmatter {
          slug
          order
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
