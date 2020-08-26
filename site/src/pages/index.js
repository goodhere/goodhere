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
      <p className="text-center text-lg tracking-wide text-gray-800 px-16 sm:px-64 pt-2 md:pt-4">
        Good Here helps you discover <a href="/organizations" class="hover:underline hover:text-red-500">social impact startups</a>, connect with 
        the <a href="https://goodhere.discourse.group/" class="hover:underline hover:text-red-500">social impact community</a>, and find <a href="/capital" class="hover:underline hover:text-red-500">social impact funding</a>. 
        Currently tracking <a href="/organizations" class="hover:underline hover:text-red-500">2,775 startups</a> and <a href="/capital" class="hover:underline hover:text-red-500">453 funders</a>.
      </p>
      <p className="mt-8 text-center">
        <a
         href="/contribute" 
         className="inline-block text-2xl px-4 border-2 rounded text-red-500 bg-red-white border-red-500 hover:text-red-500 hover:border-red-500 hover:bg-transparent
         ">
          Add Your Startup
        </a>
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

      <div id="about" className="max-w-6xl mx-auto lg:flex items-start py-4">
        <div className="text-lg px-6 py-6 flex-1">
          <h2 className="text-2xl md:text-3xl font-light">
            What is Good Here?
          </h2>
          <p className="mt-4">
            Good Here is an open database of social impact startups and funding opportunities.
          </p>
          <p className="mt-4">
            Our content is community-moderated and published under the
            permissive{" "}
            <a
              href="http://creativecommons.org/licenses/by-sa/4.0/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:no-underline"
            >
              Creative Commons BY-SA
            </a>{" "}
            license. This website is open source and available{" "}
            <a
              href="https://github.com/benrmatthews/goodhere"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:no-underline"
            >
              on GitHub
            </a>
            .
          </p>
          <p className="mt-8 text-center">
            <Link
              to="/contribute/"
              className="inline-block text-2xl px-4 py-2 border-2 rounded text-white bg-red-500 border-red-500 hover:text-red-500 hover:border-red-500 hover:bg-transparent"
            >
              Become a Contributor
            </Link>
          </p>
        </div>
        <div className="text-lg px-6 py-6 flex-1">
          <h2 className="text-2xl md:text-3xl font-light">More is Coming</h2>
          <p className="mt-4">
            This is just the beginning. Our team is already
            designing the next 
            iteration of Good Here and we want your help.
          </p>
          <p className="mt-4">
            Follow us on Twitter (
            <a
              href="https://twitter.com/goodhereorg"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:no-underline"
            >
              @goodhereorg
            </a>
            ) and subscribe to our newsletter to help shape our future.
          </p>
          <p className="mt-8 text-center">
            <a
              href={data.site.siteMetadata.newsletterUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-2xl px-4 py-2 border-2 rounded text-white bg-red-500 border-red-500 hover:text-red-500 hover:border-red-500 hover:bg-transparent"
            >
              Subscribe Here
            </a>
          </p>
        </div>
      </div>
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