import React from "react"
import classnames from "classnames"

import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ContributorCard from "../components/ContributorCard"

const Header = ({ children, className = {} }) => (
  <h2
    className={classnames(
      "text-gray-900 text-2xl md:text-3xl font-light my-3",
      className
    )}
  >
    {children}
  </h2>
)

const TextLink = ({ href, children, newWindow = false }) => {
  const newWindowArgs = newWindow
    ? {
        target: "blank",
        rel: "noopener noreferrer",
      }
    : {}

  return (
    <a
      className="underline hover:no-underline text-blue-600"
      href={href}
      {...newWindowArgs}
    >
      {children}
    </a>
  )
}

export default function ContributePage({ data }) {
  const contributors = data.contributors.nodes
    .sort((a, b) => a.data.Join_Date > b.data.Join_Date)
    .map(({ data: { Name, Avatar, Contributions, Website } }) => ({
      name: Name,
      avatar: Avatar?.localFiles[0]?.childImageSharp.fluid,
      contributions: Contributions,
      website: Website,
    }))

  const {
    organizationAddFormUrl,
    capitalAddFormUrl,
    contributorFormUrl,
  } = data.site.siteMetadata

  return (
    <Layout contentClassName="bg-gray-100">
      <SEO title="Contribute to Good Here" />
      <div className="flex flex-col mx-auto container lg:flex-row lg:w-4/5">
        <div className="lg:w-3/5 p-3 lg:p-6">
          <div>
            <Header>About Good Here</Header>
            <p className="mt-2">
              Good Here is an open database of social impact organisations.
            </p>
            <p className="mt-2">
              We help you discover impactful organizations, connect with the
              changemakers behind them, and pursue new social impact opportunities.
            </p>
            <p className="mt-2">
              Our data is community-moderated and published under the permissive Creative Commons BY-SA license. This website is open source and
              available on GitHub.
            </p>
            <Header>Submit a project</Header>
            <p>
              We invite anyone to submit new projects to Good Here. The
              only requirement for acceptance is a positive social impact.
            </p>
            <p className="mt-2">
              For investors and organizations providing grants, project finance, or
              other forms of funding, use the{" "}
              <TextLink newWindow href={capitalAddFormUrl}>
                Funding Form
              </TextLink>
              .
            </p>
            <p className="mt-2">
              For organizations providing products, services, research,
              networks, or otherwise, use the{" "}
              <TextLink newWindow href={organizationAddFormUrl}>
                Project Form
              </TextLink>
              .
            </p>
            <Header className="pt-3">Join our Team</Header>
            <p className="my-2">
              Good Here is maintained by a global team of volunteers. If
              you&#39;re interested in helping out, here are the ways you can
              get involved:
            </p>
            <ol className="list-decimal list-outside ml-5">
              <li className="mt-1">
                Apply to join our{" "}
                <TextLink newWindow href={contributorFormUrl}>
                  editorial team
                </TextLink>
              </li>
              <li className="mt-1">
                Contribute to the development of this website{" "}
                <TextLink
                  newWindow
                  href="https://github.com/benrmatthews/goodhere/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+issue%22"
                >
                  on GitHub
                </TextLink>
              </li>
            </ol>
            <p className="my-2">
              Want to help another way?{" "}
              <TextLink href="mailto:ben@empower.agency">
                Get in touch
              </TextLink>
            </p>
          </div>
        </div>
        <div className="p-3 pb-6 lg:p-6 lg:w-2/5">
          <Header>Contributors</Header>
          <div>
            {contributors.map(contributor => (
              <ContributorCard
                key={contributor.name}
                name={contributor.name}
                contributions={contributor.contributions}
                avatar={contributor.avatar}
                website={contributor.website}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ContributorsQuery {
    site {
      siteMetadata {
        capitalAddFormUrl
        organizationAddFormUrl
        contributorFormUrl
      }
    }
    contributors: allAirtable(filter: { table: { eq: "Contributors" } }) {
      nodes {
        data {
          Name
          Join_Date
          Contributions
          Website
          Avatar {
            localFiles {
              childImageSharp {
                fluid(maxWidth: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`