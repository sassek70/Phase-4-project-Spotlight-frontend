import Navbar from './Navbar'
import { Routes, Route} from "react-router-dom";
import Welcome from './Welcome.js'
// import NewUserForm from './NewUserForm.js'
import LogInForm from './LogInForm.js'
import UserVenues from './UserVenues.js'
import UserEvents from './UserEvents.js'
import Venues from './Venues.js'
import Events from './Events.js'
import { useEffect, useState } from 'react';

function App() {
  const [currentUser, setCurrentUser] = useState('')

  useEffect (() => {
    let userId = localStorage.getItem("username")
    userId ? 
    fetch (`http://localhost:3000/users/${userId}`)
    .then((r) => r.json())
    .then((serverUser) => setCurrentUser(serverUser)) : setCurrentUser('')
  },[])




  return (
    <>
      <Navbar />
        {currentUser ?
        <h1>Welcome {currentUser.username}</h1>
        :
        <h1>Welcome to Spotlight!</h1>
        }
      <Routes>
            <Route path='/' element={<Welcome />}/>
            <Route path='/login' element={<LogInForm setCurrentUser={setCurrentUser} currentUser={currentUser}/>}/>
            <Route path='/users/:id/venues' element={<UserVenues />}/>
            <Route path='/users/:id/events' element={<UserEvents />}/>
            <Route path='/allvenues' element={<Venues />}/>
            <Route path='/allevents' element={<Events />}/>
        </Routes>
    </>
  );
}

export default App;
