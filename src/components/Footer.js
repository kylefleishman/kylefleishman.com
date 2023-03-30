import React from 'react'
import { Link } from 'gatsby'


const madeWithLinks = [
  { url: 'https://www.gatsbyjs.org/', label: 'Gatsby' },
  { url: 'https://github.com/kylefleishman', label: 'GitHub'},
  { url: 'https://www.netlify.com/', label: 'Netlify'},
 
]

export const Footer = () => {
  return (
    <footer className="footer">
      <section>
        <nav className="top-nav">
          <p>Made by Kyle Fleishman</p> 
        </nav>
        <nav className="bottom-nav">
          {madeWithLinks.map((link) => (
            <a
              href={link.url}
              title={link.label}
              target="_blank"
              rel="noopener noreferrer"
              key={link.url}
            >
              <span>{link.label}</span>
           
            </a>
          ))}
        </nav>
      
      </section>
    </footer>
  )
}