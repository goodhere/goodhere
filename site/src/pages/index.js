import React from "react"
import { Link, graphql } from "gatsby"

import { transformCategories, transformCapitalTypes } from "../utils/airtable"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TopicCard from "../components/TopicCard"

function ViewAll({ name, href }) {
  return (
    <div className="text-center">
      <Link to={href} className="text-lg text-blue-600 hover:text-blue-700">
        View All {name} <span className="text-2xl">&rsaquo;</span>
      </Link>
    </div>
  )
}

export default function IndexPage({ data }) {
  const categories = transformCategories(data.categories.nodes)
  const capitalTypes = transformCapitalTypes(data.capitalTypes.nodes)

  const topCategories = categories.filter(cat => !cat.parent)

  return (
    <Layout contentClassName="text-gray-900">
      <SEO />

      <h1 className="font-bold text-2xl md:text-4xl text-center tracking-wide text-gray-800 px-2 sm:px-8 pt-8 md:pt-16">
        Find social impact startups and funding
      </h1>
      <p className="text-center text-lg text-gray-800 px-16 sm:px-64 pt-2 md:pt-4">
        Good Here helps you discover <a href="/organizations" className="hover:underline hover:text-red-500">social impact startups</a>, connect with
        the <a href="https://goodhere.discourse.group/" className="hover:underline hover:text-red-500">social impact community</a>, and find <a href="/capital" className="hover:underline hover:text-red-500">social impact funding</a>.
        Currently tracking <u><a href="/organizations" className="hover:underline hover:text-red-500">2,775 startups</a></u> and <u><a href="/capital" className="hover:underline hover:text-red-500">453 funders</a></u>.
      </p>
      <p className="text-center text-lg text-gray-800 px-16 sm:px-64 pt-2 md:pt-4">
        Join a thriving community of social entrepreneurs and impact investors.
      </p>
      <p className="mt-8 text-center">
        <iframe className="inline-block" src="https://goodhere.substack.com/embed" height="80" scrolling="no">
        </iframe>
      </p>
      <p className="mt-8 text-center">
        <a href="https://airtable.com/shrwx4PHtGAS15tUN" className="hover:underline text-gray-600 hover:text-red-500">Or submit social impact startup</a>
      </p>
      <div id="organizations" className="md:py-6">
        <h2 className="font-bold text-2xl md:text-4xl text-center font-light tracking-wide text-gray-800 mt-6 mb-3">
          View social impact startups by category
        </h2>
        <div className="p-3 flex flex-wrap max-w-6xl mx-auto">
          {topCategories.map(cat => (
            <TopicCard category={cat} key={cat.name} />
          ))}
        </div>
        <ViewAll href="/organizations" name="Projects" />
      </div>

      <div className="bg-gray-200 pb-12 my-12">
        <div id="organizations" className="py-6">
          <h2 className="font-bold text-2xl md:text-4xl text-center font-light tracking-wide text-gray-800 mt-6 mb-3">
            Funding for social impact startups
          </h2>
          <div className="p-3 flex flex-wrap max-w-6xl mx-auto">
            {capitalTypes.map(({ name, slug, cover }) => (
              <TopicCard
                key={slug}
                category={{
                  slug,
                  cover,
                  name,
                }}
              />
            ))}
          </div>
          <ViewAll href="/capital" name="Funding" />
        </div>
      </div>

{/*       <div id="about" className="max-w-6xl mx-auto lg:flex items-start py-4">
        <div className="text-lg px-6 py-6 flex-1">
          <h2 className="font-bold text-center">
            Submit your startup
          </h2>
          <p className="mt-4 text-center">
            Good Here is an open database of social impact startups and funding opportunities.
          </p>
          <p className="mt-8 text-center">
            <Link
              to="/contribute/"
              className="inline-block px-4 py-2 border-2 rounded text-white bg-red-500 border-red-500 hover:text-red-500 hover:border-red-500 hover:bg-transparent"
            >
              Find funding
            </Link>
          </p>
        </div>
        <div className="text-lg px-6 py-6 flex-1">
          <h2 className="font-bold text-center">
            What is Good Here?
          </h2>
          <p className="mt-4 text-center">
            Good Here is an open database of social impact startups and funding opportunities.
          </p>
          <p className="mt-8 text-center">
            <Link
              to="/contribute/"
              className="inline-block px-4 py-2 border-2 rounded text-white bg-red-500 border-red-500 hover:text-red-500 hover:border-red-500 hover:bg-transparent"
            >
              Join the community
            </Link>
          </p>
        </div>
        <div className="text-lg px-6 py-6 flex-1">
          <h2 className="font-bold text-center">
            What is Good Here?
          </h2>
          <p className="mt-4 text-center">
            Good Here is an open database of social impact startups and funding opportunities.
          </p>
          <p className="mt-8 text-center">
            <Link
              to="/contribute/"
              className="inline-block px-4 py-2 border-2 rounded text-white bg-red-500 border-red-500 hover:text-red-500 hover:border-red-500 hover:bg-transparent"
            >
              Become a Contributor
            </Link>
          </p>
        </div>
      </div> */}
    </Layout>
  )
}

export const query = graphql`
  fragment HomepageCover on AirtableField {
    localFiles {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
  query HomeQuery {
    site {
      siteMetadata {
        newsletterUrl
      }
    }
    capitalTypes: allAirtable(
      filter: { table: { eq: "Capital Types" }, data: { Count: { gte: 3 } } }
      sort: { fields: [data___Count], order: DESC }
    ) {
      nodes {
        id
        data {
          Name
          Slug
          Cover {
            ...HomepageCover
          }
        }
      }
    }
    categories: allAirtable(filter: { table: { eq: "Categories" } }) {
      nodes {
        id
        data {
          Name
          Parent {
            id
            data {
              Name
            }
          }
          Cover {
            ...HomepageCover
          }
        }
      }
    }
  }
` 
