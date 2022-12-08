import Navbar from './Navbar'
import { Routes, Route, useNavigate} from "react-router-dom";
import Welcome from './Welcome.js'
import LogInForm from './LogInForm.js'
// import UserVenues from './UserVenues.js'
import UserEvents from './UserEvents.js'
import Venues from './Venues.js'
import Events from './Events.js'
import { useEffect, useState } from 'react';
import User from './User';

function App() {
  const [currentUser, setCurrentUser] = useState()
  const navigate = useNavigate()

  useEffect (() => {
    let user = localStorage.getItem("username")
    if (user) {
      fetch (`http://localhost:3000/users/${user}`)
      .then((r) => r.json())
      .then((serverUser) => {
        setCurrentUser(serverUser)
        navigate(`/users/${currentUser.id}/events`)
    }) 
    }
    else
    navigate(`/`)
  },[])

  const handleLogOut =() => {
    localStorage.removeItem("username")
    setCurrentUser(null)
    navigate('/')
}


const updateUserEvents = (newEventId) => {

  if (currentUser){

  fetch (`http://localhost:3000/users/${currentUser.id}/user_events`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      },
    body: JSON.stringify({
      user_id: currentUser.id,
      event_id: newEventId
    })
  })
  .then(res => {if(res.ok) {
  res.json().then(
    navigate(`/users/${currentUser.id}/events`))
  }})
} else {
  alert("You must be logged in")
  navigate('/login')
}
}


  const removeUserEvent = (eventId) => {
    fetch(`http://localhost:3000/users/${currentUser.id}/user_events/${eventId}`, {
        method: "DELETE",
        headers: {
            "Content-Type" : "application/json"
                }
    })
    .then(res => {if(res.ok){
    navigate('/allevents')
    }
    })
    console.log(eventId)
}


  return (
    <>
      <Navbar handleLogOut={handleLogOut} currentUser={currentUser}/>
       <Routes>
            <Route path='/' element={<Welcome currentUser={currentUser}/>}/>
            <Route path='/login' element={<LogInForm setCurrentUser={setCurrentUser}/>}/>
            <Route path={`/users/${currentUser? currentUser.id : null}`} element={<User currentUser={currentUser} setCurrentUser={setCurrentUser} handleLogOut={handleLogOut}/>}/>
            {/* <Route path={`/users/${currentUser? currentUser.id : null}/venues`} element={<UserVenues />}/> */}
            <Route path={`/users/${currentUser? currentUser.id : null}/user_events`} element={<UserEvents currentUser={currentUser} removeUserEvent={removeUserEvent}/>}/>

            <Route path='/allvenues' element={<Venues />}/>
            <Route path='/allevents' element={<Events updateUserEvents={updateUserEvents}/>}/>
        </Routes>
    </>
  );
}

export default App;
