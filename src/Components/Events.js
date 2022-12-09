import { useEffect, useState } from "react"
import EventCard from "./EventCard"
import uuid from "react-uuid"
import { Card, Grid } from 'semantic-ui-react'

const Events = ({updateUserEvents}) => {
    const [eventList, setEventList] = useState([])

    useEffect (()=> {
        fetch (`${process.env.REACT_APP_BACKEND_URL}/events`)
        .then(res=> res.json())
        .then(eventArray => setEventList(eventArray))
    },[])

    console.log(eventList)


    const displayEvents = eventList.map((event)=> {
        const { id, name, venue, event_type, datetime_local, image } = event
        return (
            <Grid.Column key={uuid()}>
                <EventCard id={id} name={name} venue={venue} event_type={event_type} datetime_local={datetime_local} image={image} updateUserEvents={updateUserEvents}/>
            </Grid.Column>
        )
    })


    return (
        <Card.Group>
        <div style={{paddingTop: "50px"}}>
            <Grid relaxed columns={3} padded="horizontally">
            {displayEvents}
            </Grid>
        </div>
        </Card.Group>

    )
}

export default Events





// t.string "name"
// t.string "venue"
// t.string "event_type"
// t.datetime "datetime_local"