import Navbar from './Navbar'
import { Routes, Route, useNavigate} from "react-router-dom";
import Welcome from './Welcome.js'
import LogInForm from './LogInForm.js'
import UserVenues from './UserVenues.js'
import UserEvents from './UserEvents.js'
import Venues from './Venues.js'
import Events from './Events.js'
import { useEffect, useState } from 'react';
import User from './User';

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [userEvents, setUserEvents] = useState([])
  const navigate = useNavigate()

  useEffect (() => {
    let user = localStorage.getItem("username")
    if (user) {
    getStoredUserFromServer(user)
    }
    else
    navigate(`/`)
  },[])

  const getStoredUserFromServer = (user) => {
    fetch (`http://localhost:3000/users/${user}`)
    .then((r) => r.json())
    .then((serverUser) => {
      setCurrentUser(serverUser)
      setUserEvents(serverUser.events)
      navigate(`/users/${currentUser.id}/events`)
  }) 
  }

  const handleLogOut =() => {
    localStorage.removeItem("username")
    setCurrentUser(null)
    navigate('/')
}


console.log(userEvents)


const updateUserEvents = (newEventId) => {
  fetch (`http://localhost:3000/user_events`, {
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
  res.json().then((newEvent) => {
    setUserEvents((userEvents) => [...userEvents, newEvent])
    navigate(`/users/${currentUser.id}/events`)
  })}
})
}


  return (
    <>
      <Navbar handleLogOut={handleLogOut} currentUser={currentUser}/>
       <Routes>
            <Route path='/' element={<Welcome currentUser={currentUser}/>}/>
            <Route path='/login' element={<LogInForm setCurrentUser={setCurrentUser}/>}/>
            <Route path={`/users/${currentUser? currentUser.id : null}`} element={<User currentUser={currentUser} setCurrentUser={setCurrentUser} handleLogOut={handleLogOut}/>}/>
            {/* <Route path={`/users/${currentUser? currentUser.id : null}/venues`} element={<UserVenues />}/> */}
            <Route path={`/users/${currentUser? currentUser.id : null}/events`} element={<UserEvents currentUser={currentUser} userEvents={userEvents} updateUserEvents={updateUserEvents}/>}/>

            <Route path='/allvenues' element={<Venues />}/>
            <Route path='/allevents' element={<Events updateUserEvents={updateUserEvents}/>}/>
        </Routes>
    </>
  );
}

export default App;
