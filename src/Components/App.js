import Navbar from './Navbar'
import { Routes, Route, useNavigate} from "react-router-dom";
import Welcome from './Welcome.js'
// import NewUserForm from './NewUserForm.js'
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
    let userId = localStorage.getItem("username")
    userId ? 
    fetch (`http://localhost:3000/users/${userId}`)
    .then((r) => r.json())
    .then((serverUser) => setCurrentUser(serverUser)) 
    :
    setCurrentUser(null)
  },[])

  const handleLogOut =() => {
    localStorage.removeItem("username")
    setCurrentUser(null)
    navigate('/')
}


  return (
    <>
      <Navbar handleLogOut={handleLogOut} currentUser={currentUser}/>
        {currentUser ?
        <>
        <h1>Welcome {currentUser.username}</h1>
        <Routes>
            <Route path='/users/:id' element={<User currentUser={currentUser}/>}/>
            <Route path='/users/:id/venues' element={<UserVenues />}/>
            <Route path='/users/:id/events' element={<UserEvents />}/>
        </Routes>
        </>
        :
        <>
        </>
        }
      <Routes>
            <Route path='/' element={<Welcome />}/>
            <Route path='/login' element={<LogInForm setCurrentUser={setCurrentUser}/>}/>

            <Route path='/allvenues' element={<Venues />}/>
            <Route path='/allevents' element={<Events />}/>
        </Routes>
    </>
  );
}

export default App;
