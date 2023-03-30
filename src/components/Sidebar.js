import React from 'react'
import { Link } from 'gatsby'

import blog from '../assets/blue-potion-near-emtpy.png'
import projects from '../assets/blue-potion-half-empty.png'
import aboutMe from '../assets/blue-potion.png'

const mainNavItems = [
  { url: '/blog', icon: blog, label: 'Articles' },
  { url: '/projects', icon: projects, label: 'Projects' },
  { url: '/me', label: 'About' },
]
export const Sidebar = () => {
  

  return (
    <div>
    <aside className="sidebar">
      <div className="title">
        <span>Articles</span>
          </div>
          <div className="categories">
          <Link to="/">Home</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/me">About</Link>
          <Link to="/404">404</Link>

          
          </div>
          </aside>

          
</div>





  )
}