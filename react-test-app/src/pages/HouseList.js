import React from 'react'
import { useHouses } from '../hooks/useHouses'
import { Link } from 'react-router-dom'



export default function HouseList() {

    const {error, loading, data} = useHouses();
    if (loading) return (<div>Still loading...</div>)
    if (error) return (<div>Something went wrong...</div>)
    return (
    <div className='HouseList'>
        {data.houses.map(house => {
            return (
            <div>
                 <Link to={`/search`}><button>Search by Location</button></Link>


                <Link to={`/${house.id}`}><h2>{house.name}</h2></Link>
                <p>{house.homeStyle}</p>
                <p>{house.location}</p>
                <p>{house.description}</p>
                <p>{house.price}</p>
            </div>

            )
        })}
    </div>
  )
}

