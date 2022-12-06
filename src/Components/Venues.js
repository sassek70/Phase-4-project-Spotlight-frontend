import { useEffect, useState } from "react"

const Venues = () => {
    const [venueList, setVenueList] = useState([])

    useEffect (()=> {
        fetch (`http://localhost:3000/venues`)
        .then(res=> res.json())
        .then(venueArray => setVenueList(venueArray))
    },[])

    console.log(venueList)



    return (
        <>
        Venue list goes here
        </>

    )
}

export default Venues

