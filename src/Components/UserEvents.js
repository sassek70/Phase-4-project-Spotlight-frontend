import { useEffect, useState } from "react"
import EventCard from "./EventCard"
import uuid from "react-uuid"


const UserEvents = ({currentUser, userEvents, updateUserEvents}) => {



    const displayUserEvents = userEvents.map((event)=> {
        const { id, name, venue, event_type, datetime_local, image } = event
        return <EventCard key={uuid()} id={id} name={name} venue={venue} event_type={event_type} datetime_local={datetime_local} image={image} updateUserEvents={updateUserEvents}/>
    })


    return (
        <>
        <h2>Your Upcoming Events:</h2>
        {displayUserEvents}
        </>
    )
}

export default UserEvents