import React from 'react'
import { useLocation } from '@reach/router'
import { Link } from 'gatsby'

import { Hamburger } from '../assets/Hamburger'

export const FileHeader = ({ setCollapsed, onUpdateTheme, theme }) => {

  return (
    <header className="file-header">
        <button
          onClick={() => setCollapsed((prev) => !prev)}
          className="desktop-only"
          title="Collapse Sidebar"
        >
          <Hamburger />
        </button>
      
      <div className="toolbar">
        <button onClick={onUpdateTheme} className="theme-switcher">
          <span>{theme === 'dark' ? 'Dark' : 'Light'}</span>
        </button>
      </div>
    </header>
  )
}