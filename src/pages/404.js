
import React from 'react'
import Helmet from 'react-helmet'
import { Layout } from '../components/Layout'
import { SEO } from '../components/SEO'
import config from '../utils/config'

export default function fourZeroFour() {
  return (
    <>
      
      <Helmet title={`404 | ${config.siteTitle}`} />
      <SEO />

      <article>
        <header>
          <div className="container">
            <h1>404!</h1>
            <p className="404description">Oh No! There must have been an error.</p>
          </div>
        </header>

      </article>
    </>
  )
}

fourZeroFour.Layout = Layout