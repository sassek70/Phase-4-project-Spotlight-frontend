import { useEffect, useState } from "react"
import EventCard from "./EventCard"
import uuid from "react-uuid"


const UserEvents = ({currentUser, removeUserEvent}) => {
  const [userEvents, setUserEvents] = useState([])


    useEffect(() => {
    fetch (`http://localhost:3000/users/${currentUser.id}`)
      .then((r) => r.json())
      .then((user) => setUserEvents(user.events))
    },[])
    
    console.log(userEvents)

    const displayUserEvents = userEvents.map((event)=> {
        const { id, name, venue, event_type, datetime_local, image } = event
        return <EventCard key={uuid()} id={id} name={name} venue={venue} event_type={event_type} datetime_local={datetime_local} image={image} removeUserEvent={removeUserEvent} currentUser={currentUser}/>
    })


    return (
        <>
        <h2>Your Upcoming Events:</h2>
        {displayUserEvents}
        </>
    )
}

export default UserEvents