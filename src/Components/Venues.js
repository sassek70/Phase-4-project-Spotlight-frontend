import { useEffect, useState } from "react"
import VenueCard from "./VenueCard"

const Venues = () => {
    const [venueList, setVenueList] = useState([])

    useEffect (()=> {
        fetch (`http://localhost:3000/venues`)
        .then(res=> res.json())
        .then(venueArray => setVenueList(venueArray))
    },[])

    console.log(venueList)

    const displayVenues = venueList.map((venue)=> {
        const { id, name, address, city, state, postal_code, image } = venue
        return <VenueCard key={id} id={id} name={name} address={address} city={city} state={state} postal_code={postal_code} image={image}/>
    })



    return (
        <>
            {displayVenues}
        </>

    )
}

export default Venues


// t.string "name"
// t.string "address"
// t.string "city"
// t.string "state"
// t.integer "postal_code"
// t.string "image"