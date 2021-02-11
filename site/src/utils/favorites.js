import { keyBy, mapValues, get } from "lodash"
import { useState, useEffect } from "react"
import { useLazyQuery, gql } from "@apollo/client"
import { graphql } from "gatsby"
import { useAuth0 } from "../components/Auth0Provider"

const GetFavorites = gql`
  query GetFavorites($loggedIn: Boolean!, $userId: uuid) {
    favorites(where: { userId: { _eq: $userId } }) @include(if: $loggedIn) {
      id
      recordId
    }

    favoritesCount {
      recordId
      count
    }
  }
`;

const GetUserFavorites = gql`
  query GetUserFavorites($loggedIn: Boolean!, $userId: uuid) {
    favorites(where: { userId: { _eq: $userId } }, distinct_on: recordId) {
      id
      favorite_count {
        count
      }
      organization {
        id
        data
      }
    }
  }
`;

// For Gatsby to pull favorites when building the site
export const query = graphql`
  fragment StaticFavorites on Query {
    climatescape {
      favoritesCount {
        recordId
        count
      }
    }
  }
`

// Accepts raw data from the GetFavorites query and returns an object indexed
// by record_id that has both count and the user's favorite ID
function indexFavoritesData(data) {
  if (!data) return {}

  const counts = keyBy(data.favoritesCount, "recordId")
  const favorites = keyBy(data.favorites, "recordId")

  return mapValues(counts, ({ recordId, count }) => ({
    count, // The total count of favorites
    id: favorites[recordId]?.id, // The user's favorite
  }))
}

function normalizeFavorites(data) {
  if (!data) return null

  return data.favorites.map((entity) => ({
    ...get(entity, 'organization.data'),
    favorite: {
      id: entity.id,
      count: get(entity, 'favorite_count.count'),
    }
  }))
}

const APP_CLAIM = "https://climatescape.org/app"
// Fetches all favorites data from the GraphQL API, waiting until Auth0 is done
// loading so that the current user's favorites may be fetched. Returns a hooked
// object that will eventually take the following shape:
// {
//   "rec1": { count: 14, id: "uuid-of-users-favorite" },
//   "rec2": { count: 2, id: null },
// }
export function useFavorites(defaultData, { isFavoritesPage } = {}) {
  const { loading: authLoading, user } = useAuth0()
  const [favorites, setFavorites] = useState(indexFavoritesData(defaultData))

  const uuid = user?.sub?.replace(/.+\|/, '')

  const [getFavorites, { data, loading: favoritesLoading, called }] = useLazyQuery(isFavoritesPage ? GetUserFavorites : GetFavorites, {
    variables: {
      loggedIn: !!user,
      userId: uuid,
    },
  })

  // Only fetch favorites from the server once we know if a user is logged in
  useEffect(() => {
    if (!authLoading) getFavorites()
  }, [authLoading, getFavorites])

  // Index and set favorites any time data changes
  useEffect(() => {
    if (data) {
      setFavorites(isFavoritesPage ? normalizeFavorites(data) : indexFavoritesData(data))
    }
  }, [data, favoritesLoading])

  const isLoading = favoritesLoading || authLoading

  return [favorites, isLoading]
}

export const mergeFavorites = (orgs, favs) =>
  orgs.map(org => ({
    ...org,
    favorite: favs[org.recordId],
  }))
