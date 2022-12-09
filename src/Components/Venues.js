import { useEffect, useState } from "react"
import VenueCard from "./VenueCard"
import uuid from "react-uuid"
import { Card, Grid } from 'semantic-ui-react'


const Venues = () => {
    const [venueList, setVenueList] = useState([])

    useEffect (()=> {
        fetch (`${process.env.REACT_APP_BACKEND_URL}/venues`)
        .then(res=> res.json())
        .then(venueArray => setVenueList(venueArray))
    },[])

    console.log(venueList)

    const displayVenues = venueList.map((venue)=> {
        const { id, name, address, city, state, postal_code, image } = venue
        return( 
            <Grid.Column key={uuid()}>
                <VenueCard id={id} name={name} address={address} city={city} state={state} postal_code={postal_code} image={image}/>
            </Grid.Column>
        )
    })



    return (
        // <Card.Group>
            <div style={{paddingTop: "50px", maxWidth: "100vh", margin: 'auto'}}>            
                <Grid relaxed columns={3} padded="horizontally">
                {displayVenues}
                </Grid>
            </div>
        // </Card.Group>


    )
}

export default Venues


// t.string "name"
// t.string "address"
// t.string "city"
// t.string "state"
// t.integer "postal_code"
// t.string "image"