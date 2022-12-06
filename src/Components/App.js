import Navbar from './Navbar'
import { Routes, Route} from "react-router-dom";
import Welcome from './Welcome.js'
// import NewUserForm from './NewUserForm.js'
import LogInForm from './LogInForm.js'
import UserVenues from './UserVenues.js'
import UserEvents from './UserEvents.js'
import Venues from './Venues.js'
import Events from './Events.js'
import { useState } from 'react';

function App() {
  const [user, setUser] = useState(null)




  return (
    <>
      <Navbar />
      <Routes>
            <Route path='/' element={<Welcome />}/>
            <Route path='/login' element={<LogInForm onLogIn={setUser}/>}/>
            {/* <Route path='/createaccount/' element={<NewUserForm />}/> */}
            <Route path='/users/:id/venues' element={<UserVenues />}/>
            <Route path='/users/:id/events' element={<UserEvents />}/>
            <Route path='/allvenues' element={<Venues />}/>
            <Route path='/allevents' element={<Events />}/>
        </Routes>
        {user ?
        <h1>Welcome {user.username}</h1>
        :
        <h1>Welcome to Spotlight!</h1>
        }
    </>
  );
}

export default App;
