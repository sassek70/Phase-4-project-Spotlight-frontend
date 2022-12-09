import { useEffect, useState } from "react"
import EventCard from "./EventCard"
import uuid from "react-uuid"
import { useNavigate } from "react-router"
import PasswordChangeForm from "./PasswordChangeForm"
import { Button } from 'semantic-ui-react'



const User = ({currentUser, setCurrentUser, handleLogOut}) => {
    const navigate = useNavigate()
    // const [userEvents, setUserEvents] = useState([])
    const [showPasswordForm, setShowPasswordForm] = useState(false)

    // useEffect(() => {
    //     fetch(`http://localhost:3000/users/${currentUser.id}`)
    //     .then(r => r.json())
    //     .then((userdata) => setUserEvents(userdata.events))
    // },[])

    // console.log(userEvents)
    console.log(currentUser.id)

 
    // const displayUserEvents = userEvents.map((event)=> {
    //     const { id, name, venue, event_type, datetime_local, image } = event
    //     return <EventCard key={uuid()} id={id} name={name} venue={venue} event_type={event_type} datetime_local={datetime_local} image={image}/>
    // })

    const handleDelete = () => {
        fetch(`${process.env.REACT_APP_BACKEND_URL}/users/${currentUser.id}`, {
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
        <div className="button-container">
        <Button inverted color='red' onClick={() => handleDelete(currentUser.id)}>Delete Account</Button>
        <Button inverted color='red' onClick={() => setShowPasswordForm(true)}>Change Password</Button>
        {showPasswordForm?
            <PasswordChangeForm currentUser={currentUser}/>
        :
        <>
        {/* <h2>Your Upcoming Events:</h2>
        {displayUserEvents} */}
        </>
        }
        </div>
    )
}

export default User