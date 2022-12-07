import { useEffect, useState } from "react"
import EventCard from "./EventCard"
import uuid from "react-uuid"
import { useNavigate } from "react-router"


const User = ({currentUser, setCurrentUser, handleLogOut}) => {
    const navigate = useNavigate()
    const [userEvents, setUserEvents] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3000/users/${currentUser.id}`)
        .then(r => r.json())
        .then((userdata) => setUserEvents(userdata.events))
    },[])

    console.log(userEvents)
    console.log(currentUser.id)

 
    const displayUserEvents = userEvents.map((event)=> {
        const { id, name, venue, event_type, datetime_local, image } = event
        return <EventCard key={uuid()} id={id} name={name} venue={venue} event_type={event_type} datetime_local={datetime_local} image={image}/>
    })

    const handleDelete = () => {
        fetch(`http://localhost:3000/users/${currentUser.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type" : "application/json"
                    }
        })
        .then(res => {if(res.ok){
            handleLogOut()
            setCurrentUser(null)
            navigate('/')
        }
        })
    }


    return (
        <>
        <button onClick={() => handleDelete(currentUser.id)}>Delete Account</button>
        {displayUserEvents}
        </>
    )
}

export default User