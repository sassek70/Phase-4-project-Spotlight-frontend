import Navbar from './Navbar'
import { Routes, Route} from "react-router-dom";
import Welcome from './Welcome.js'
// import NewUserForm from './NewUserForm.js'
import LogInForm from './LogInForm.js'
import UserVenues from './UserVenues.js'
import UserEvents from './UserEvents.js'
import Venues from './Venues.js'
import Events from './Events.js'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
            <Route path='/' element={<Welcome />}/>
            <Route path='/login' element={<LogInForm />}/>
            {/* <Route path='/createaccount/' element={<NewUserForm />}/> */}
            <Route path='/users/:id/venues' element={<UserVenues />}/>
            <Route path='/users/:id/events' element={<UserEvents />}/>
            <Route path='/allvenues' element={<Venues />}/>
            <Route path='/allevents' element={<Events />}/>
        </Routes>

    </>
  );
}

export default App;
