import React from 'react'
import { Link } from 'gatsby'

import { Hamburger } from '../assets/Hamburger'
import blog from '../assets/blue-potion.png'
import floppyLogo from '../assets/blue-potion.png'
import floppy from '../assets/blue-potion.png'
import github from '../assets/blue-potion.png'
//import projects from '../assets/blue-potion.png'
import { slugify } from '../utils/helpers'


const mainNavItems = [
  { url: '/me', icon: floppy, label: 'About me' },
  { url: '/projects', icon: floppy, label: 'Projects' },
]

const socialNavItems = [
  { url: 'https://github.com/kylefleishman', icon: github, label: 'GitHub' },
]

export const Navigation = ({ setCollapsed, theme, onUpdateTheme }) => {
  return (
    <section className="navigation">
      <div className="container">
    
        <nav>
       
          <Link to="/" className="item brand">
            <img src={floppyLogo} className="logo" alt="Kyle Fleishman" />
            <span>Kyle Fleishman</span>
          </Link>
          {mainNavItems.map((item) => (
            <div className="nav-item-outer">
             
              <Link
                to={item.url}
                key={item.label}
                activeClassName="active"
                className={`item ${slugify(item.label)}`}
              >
                <span>{item.label}</span>
              </Link>
            </div>
          ))}

          {socialNavItems.map((item) => (
            <div className="nav-item-outer">
              <a
                href={item.url}
                key={item.label}
                className={`desktop-only item ${slugify(item.label)}`}
                target="_blank"
                rel="noreferrer"
              >
                <span>{item.label}</span>
               
              </a>
            </div>
          ))}
        </nav>
        <button className="theme-toggle" onClick={onUpdateTheme}>
          <span>{theme === 'dark' ? 'Dark' : 'Light'}</span>
        </button>
      </div>
    </section>
  )
}