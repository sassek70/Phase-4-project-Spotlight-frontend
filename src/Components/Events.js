import { useEffect, useState } from "react"
import EventCard from "./EventCard"

const Events = () => {
    const [eventList, setEventList] = useState([])

    useEffect (()=> {
        fetch (`http://localhost:3000/events`)
        .then(res=> res.json())
        .then(eventArray => setEventList(eventArray))
    },[])

    console.log(eventList)


    const displayEvents = eventList.map((event)=> {
        const { id, name, venue, event_type, datetime_local, image } = event
        return <EventCard key={id} id={id} name={name} venue={venue} datetime_local={datetime_local} image={image}/>
    })


    return (
        <>
            {displayEvents}
        </>

    )
}

export default Events





// t.string "name"
// t.string "venue"
// t.string "event_type"
// t.datetime "datetime_local"