import React, { useEffect } from "react"
import { graphql } from "gatsby"


import { useAuth0 } from "../components/Auth0Provider"
import OrganizationCard from "../components/OrganizationCard"
import SEO from "../components/seo"
import Layout from "../components/layout"

import { transformCategories } from "../utils/airtable"
import { useFavorites } from "../utils/favorites"

export default function FavoritesPage({ data }) {
  const [favorites, isLoading] = useFavorites({}, { isFavoritesPage: true })
  const { isAuthenticated, loginWithRedirect, loading: authIsLoading } = useAuth0()

  useEffect(() => {
    if (!isAuthenticated && !authIsLoading) {
      loginWithRedirect()
    }
  }, [isAuthenticated, authIsLoading]);

  const categories = data ? transformCategories(data.categories?.nodes) : []

  return (
    <Layout contentClassName="bg-gray-100 font-sans">
      <SEO title={`${"username" || "My"} favorites`} />

      <div className="flex flex-row justify-center mx-auto container lg:flex-row font-sans ">
        <div className={`lg:w-3/5 ${isLoading || !favorites ? 'h-screen' : ''}`}>
          <div className="border-b border-gray-400 py-3">
            <div className="flex items-center md:mt-4 ">
              <h2 className="text-xl sm:text-2xl tracking-wide flex-grow">My favorites</h2>
              {isAuthenticated && (
                <span className="text-gray-800 sm:block">
                  {categories?.length} organizations
                </span>
              )}
            </div>
          </div>
          { (isLoading || !favorites === null)  && (
            <div className="flex justify-around h-full items-center">
              <span className="animate-pulse">Loading</span>
            </div>
          )}
          {isAuthenticated && Array.from(favorites).map((org) => {
            return <OrganizationCard
              organization={org}
              key={org.recordId}
            />
          })}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query FavoritesPageQuery {
    categories: allAirtable(filter: { table: { eq: "Categories" } }) {
      nodes {
        id
        data {
          Name
          Definition
          Organizations {
            id
            data {
              Role
            }
          }
          Parent {
            id
          }
        }
      }
    }
  }
`
