import React from 'react'
import { Link } from 'gatsby'

import blog from '../assets/blue-potion-near-emtpy.png'
import projects from '../assets/blue-potion-half-empty.png'
import aboutMe from '../assets/blue-potion.png'

const mainNavItems = [
  { url: '/blog', icon: blog, label: 'Articles' },
  { url: '/projects', icon: projects, label: 'Projects' },
  { url: '/me', icon: aboutMe , label: 'About' },
]

export const Nav = () => {
  return (
    <aside className="navbar">
      <section>
        <nav>
          {mainNavItems.map((item) => (
            <Link to={item.url} key={item.label} activeClassName="active">
              <img src={item.icon} alt={item.label} />
              <div className="tooltip">{item.label}</div>
            </Link>
          ))}
        </nav>
       
      </section>
    </aside>
  )
}