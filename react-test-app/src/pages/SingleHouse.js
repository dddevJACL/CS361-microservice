import React from 'react'
import { useSingleHouse } from '../hooks/useSingleHouse'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom'

export default function SingleHouse() {


    const { id } = useParams()

    const {data, loading, error} = useSingleHouse(id);

    console.log({
        error,
        data,
        loading,
    })

    if (loading) return (<div>Still loading...</div>)
    if (error) return (<div>Something went wrong...</div>)
  
    return (
    <div className="singleHouse">
            <div>
                <h2>{data.house.name}</h2>
                <p>{data.house.homeStyle}</p>
                <p>{data.house.location}</p>
                <p>{data.house.description}</p>
                <p>{data.house.price}</p>
                <Link to={`/`}><button>Back</button></Link>
            </div>
    </div>
  )
}
