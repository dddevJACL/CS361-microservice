import React, { useState } from 'react'
import { gql, useLazyQuery } from '@apollo/client'
import { Link } from 'react-router-dom'

const GET_HOUSES_BY_LOCATIONS = gql`
query GetSearchResults($location: String, $homeStyle: String) {
    getSearchResults(location: $location, homeStyle: $homeStyle) {
      name
      location
      homeStyle
      description
      price
    }
  }
`


export default function Search() {

    const [location, setLocation] = useState("")

    const [getHouseLocations, { loading, error, data, called}] = useLazyQuery(GET_HOUSES_BY_LOCATIONS, 
      {
        variables: {
          location,
        }
      }
      
      )
      console.log({loading, error, data, called})
  
    return (
    <div>
        <input value={location} onChange={(e) => setLocation(e.target.value)} />
        <button onClick={() => getHouseLocations()}>Search</button>
        {data && (
          <ul>
            {data.getSearchResults.map(house => {
            return (
            <div>
                <h2>{house.name}</h2>
                <p>{house.homeStyle}</p>
                <p>{house.location}</p>
                <p>{house.description}</p>
                <p>{house.price}</p>
            </div>

            )
        })}
          </ul>
        )}
    </div>
  )
}
