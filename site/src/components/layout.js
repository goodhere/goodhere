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
import NetlifyLogo from "../images/netlify.svg"
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
    "https://blog.goodhere.org",
    title: "Blog",
  },
  {
    href: "https://github.com/benrmatthews/goodhere",
    title: "Github",
  },
  {
    href: "https://goodhere.discourse.group/",
    title: "Community",
  },
  {
    href:
    "mailto:hello@goodhere.org",
    title: "Contact Us",
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
      <main className={`flex-grow pt-16 ${contentClassName}`}>{children}</main>
      <footer class="bg-gray-400">
      <p className="mt-8 text-center">
        Join a thriving community of social entrepreneurs and impact investors.
      </p>
      <p className="mt-8 text-center">
        <iframe className="inline-block" src="https://goodhere.substack.com/embed" height="80" scrolling="no">
        </iframe>
      </p>
      </footer>
      <footer class="bg-gray-100">
        <div class="container mx-auto px-6 pt-10 pb-6">
          <div class="flex flex-wrap">
          <div class="w-full md:w-1/4 text-center md:text-left">
              <h5 class="uppercase mb-6 font-bold">Good Here</h5>
              <ul class="mb-4">
                <li class="mt-2">
                  <a href="/contribute" class="hover:underline text-gray-600 hover:text-red-500">About Good Here</a>
                </li>
                <li class="mt-2">
                  <a href="https://airtable.com/shrftH1zyJPidLg8f" class="hover:underline text-gray-600 hover:text-red-500">Join our editorial team</a>
                </li>
                <li class="mt-2">
                  <a href="https://goodhere.discourse.group/" class="hover:underline text-gray-600 hover:text-red-500">Join our Community</a>
                </li>
                <li class="mt-2">
                  <a href="https://goodhere.substack.com/subscribe" class="hover:underline text-gray-600 hover:text-red-500">Subscribe to Newsletter</a>
                </li>
                <li class="mt-2">
                  <a href="http://localhost:8000/contribute" class="hover:underline text-gray-600 hover:text-red-500">Submit social impact startup</a>
                </li>
                <li class="mt-2">
                  <a href="https://airtable.com/shrEjIuRpQPw3yLDJ" class="hover:underline text-gray-600 hover:text-red-500">Submit social impact funding</a>
                </li>
                <li class="mt-2">
                  <a href="mailto:ben@empower.agency" class="hover:underline text-gray-600 hover:text-red-500">Contact Good Here</a>
                </li>
              </ul>
            </div>
            <div class="w-full md:w-1/4 text-center md:text-left">
              <h5 class="uppercase mb-6 font-bold">Good Here Blog</h5>
              <ul class="mb-4">
                <li class="mt-2">
                  <a href="https://blog.goodhere.org/introducing-good-here-find-social-impact-startups-and-funding/" class="hover:underline text-gray-600 hover:text-red-500">Introducing Good Here</a>
                </li>
                <li class="mt-2">
                  <a href="https://blog.goodhere.org/ethical-platforms/" class="hover:underline text-gray-600 hover:text-red-500">Ethical platforms</a>
                </li>
                <li class="mt-2">
                  <a href="https://blog.goodhere.org/digital-wellbeing/" class="hover:underline text-gray-600 hover:text-red-500">Digital wellbeing</a>
                </li>
              </ul>
            </div>
            <div class="w-full md:w-1/4 text-center md:text-left">
              <h5 class="uppercase mb-6 font-bold">Social Impact Startups</h5>
              <ul class="mb-4">
                <li class="mt-2">
                  <a href="/categories/arts-and-culture" class="hover:underline text-gray-600 hover:text-red-500">Arts & Culture Startups</a>
                </li>
                <li class="mt-2">
                  <a href="/categories/community-development" class="hover:underline text-gray-600 hover:text-red-500">Community Startups</a>
                </li>
                <li class="mt-2">
                  <a href="/categories/education" class="hover:underline text-gray-600 hover:text-red-500">Education Startups</a>
                </li>
                <li class="mt-2">
                  <a href="/categories/environment-and-climate" class="hover:underline text-gray-600 hover:text-red-500">Climate Change Startups</a>
                </li>
                <li class="mt-2">
                  <a href="/categories/health" class="hover:underline text-gray-600 hover:text-red-500">Healthcare Startups</a>
                </li>
                <li class="mt-2">
                  <a href="/categories/human-and-civil-rights" class="hover:underline text-gray-600 hover:text-red-500">Human Rights Startups</a>
                </li>
                <li class="mt-2">
                  <a href="/categories/media" class="hover:underline text-gray-600 hover:text-red-500">Media Startups</a>
                </li>
                <li class="mt-2">
                  <a href="/categories/research-and-policy" class="hover:underline text-gray-600 hover:text-red-500">Research Startups</a>
                </li>
                <li class="mt-2">
                  <a href="/categories/tech-for-good" class="hover:underline text-gray-600 hover:text-red-500">Tech for Good Startups</a>
                </li>
              </ul>
            </div>
            <div class="w-full md:w-1/4 text-center md:text-left">
              <h5 class="uppercase mb-6 font-bold">Social Impact Funding</h5>
              <ul class="mb-4">
                <li class="mt-2">
                  <a href="/capital/venture-capital" class="hover:underline text-gray-600 hover:text-red-500">Venture Capital for Social Impact</a>
                </li>
                <li class="mt-2">
                  <a href="/capital/venture-capital" class="hover:underline text-gray-600 hover:text-red-500">Angel Investing for Social Impact</a>
                </li>
                <li class="mt-2">
                  <a href="/capital/accelerator" class="hover:underline text-gray-600 hover:text-red-500">Social Impact Accelerators</a>
                </li>
                <li class="mt-2">
                  <a href="/capital/crowdfunding" class="hover:underline text-gray-600 hover:text-red-500">Crowdfunding Platforms</a>
                </li>
                <li class="mt-2">
                  <a href="/capital/project-finance" class="hover:underline text-gray-600 hover:text-red-500">Finance for Social Impact Projects</a>
                </li>
                <li class="mt-2">
                  <a href="/capital/grant" class="hover:underline text-gray-600 hover:text-red-500">Grants for Social Impact Startups</a>
                </li>
                <li class="mt-2">
                  <a href="/capital/incubator" class="hover:underline text-gray-600 hover:text-red-500">Social Impact Startup Incubators</a>
                </li>
                <li class="mt-2">
                  <a href="/capital/prize" class="hover:underline text-gray-600 hover:text-red-500">Social Impact Startup Prizes</a>
                </li>
                <li class="mt-2">
                  <a href="/capital/fellowships" class="hover:underline text-gray-600 hover:text-red-500">Social Impact Startup Fellowships</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
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
        <div className="pt-3 sm:pt-0 flex justify-center">
          <a href="https://www.netlify.com">
            <img className="h-12" src={NetlifyLogo} alt="Deploys by Netlify" />
          </a>
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
