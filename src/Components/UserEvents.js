import { useEffect, useState } from "react"
import EventCard from "./EventCard"
import uuid from "react-uuid"
import { Card, Grid } from 'semantic-ui-react'



const UserEvents = ({currentUser, removeUserEvent}) => {
  const [userEvents, setUserEvents] = useState([])


    useEffect(() => {
    fetch (`${process.env.REACT_APP_BACKEND_URL}/users/${currentUser.id}`)
      .then((r) => r.json())
      .then((user) => setUserEvents(user.events))
    },[])
    
    console.log(userEvents)

    const displayUserEvents = userEvents.map((event)=> {
        const { id, name, venue, event_type, datetime_local, image } = event
        return (
          <Grid.Column key={uuid()}>
            <EventCard id={id} name={name} venue={venue} event_type={event_type} datetime_local={datetime_local} image={image} removeUserEvent={removeUserEvent} currentUser={currentUser}/>
          </Grid.Column>
        )
    })


    return (
        <>
        <h2 className="your-events">Your Upcoming Events:</h2>
        {/* <Card.Group> */}
          <div style={{paddingTop: "50px", maxWidth: "100vh", margin: 'auto'}}>
              <Grid columns={3} padded="horizontally">
              {displayUserEvents}
              </Grid>
          </div>
        {/* </Card.Group> */}
        </>
    )
}

export default UserEvents



