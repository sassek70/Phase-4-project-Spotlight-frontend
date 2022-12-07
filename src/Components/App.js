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
  const navigate = useNavigate()

  useEffect (() => {
    let user = localStorage.getItem("username")
    user ? 
    getStoredUserFromServer(user)
    :
    navigate(`/users/${currentUser? currentUser.id : null}/events`)
  },[])

  const getStoredUserFromServer = (user) => {
    fetch (`http://localhost:3000/users/${user}`)
    .then((r) => r.json())
    .then((serverUser) => setCurrentUser(serverUser)) 
  }

  const handleLogOut =() => {
    localStorage.removeItem("username")
    setCurrentUser(null)
    navigate('/')
}


  return (
    <>
      <Navbar handleLogOut={handleLogOut} currentUser={currentUser}/>
       <Routes>
            <Route path='/' element={<Welcome />}/>
            <Route path='/login' element={<LogInForm setCurrentUser={setCurrentUser}/>}/>
            <Route path={`/users/${currentUser? currentUser.id : null}`} element={<User currentUser={currentUser} setCurrentUser={setCurrentUser} handleLogOut={handleLogOut}/>}/>
            <Route path={`/users/${currentUser? currentUser.id : null}/venues`} element={<UserVenues />}/>
            <Route path={`/users/${currentUser? currentUser.id : null}/events`} element={<UserEvents />}/>

            <Route path='/allvenues' element={<Venues />}/>
            <Route path='/allevents' element={<Events />}/>
        </Routes>
    </>
  );
}

export default App;
