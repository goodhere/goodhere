/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Navbar from "./Navbar"

import "./layout.css"
import FooterLink from "./FooterLink"

const getFooterLinks = data => [
  {
    href: "https://creativecommons.org/licenses/by-sa/4.0/",
    title: "CC BY-SA",
  },
  {
    href: "https://twitter.com/goodhereorg",
    title: "Twitter",
  },
  {
    href: data.site.siteMetadata.newsletterUrl,
    title: "Newsletter",
  },
  {
    href:
      "https://airtable.com/tbl0NVgkZOPALizPT?blocks=hide",
    title: "AirTable",
  },
  {
    href: "https://github.com/benrmatthews/goodhere",
    title: "Github",
  },
  {
    href:
      "https://www.notion.so/Climatescape-FAQ-ac0b381c39574ec8a8cd4ba1df4315d9",
    title: "FAQ",
  },
]

const Layout = ({ children, contentClassName }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          newsletterUrl
        }
      }
    }
  `)

  const footerLinks = getFooterLinks(data)
  return (
    <div className="flex flex-col min-h-screen antialiased">
      <Navbar />
      <main className={`flex-grow ${contentClassName}`}>{children}</main>
      <footer className="text-gray-800 bg-gray-200 text-center md:text-left py-3 md:px-6 md:flex items-center justify-between">
        <div className="">
          ©{data.site.siteMetadata.title}&nbsp;
          {footerLinks.map((l, i) => (
            <FooterLink
              key={l.title}
              href={l.href}
              title={l.title}
              divider={i !== footerLinks.length - 1}
            />
          ))}
        </div>
      </footer>
      <script async defer src="https://sapi.climatescape.org/app.js" />
      <noscript>
        <img src="https://sapi.climatescape.org/image.gif" alt="hi" />
      </noscript>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  contentClassName: PropTypes.string,
}

export default Layout
