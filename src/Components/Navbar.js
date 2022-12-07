import { NavLink } from "react-router-dom";
import Search from "./Search";


const Navbar = ({handleLogOut, currentUser}) => {
    return (
        <nav>
            <NavLink to='/' name="Welcome">Home</NavLink>
            <NavLink to='/allvenues' name="Venues">All Venues</NavLink>
            <NavLink to='/allevents' name="Events">All Events</NavLink>
            {currentUser?
            <>
            <NavLink to={`/users/${currentUser.id}/venues`} name="UserVenues">Your Venues</NavLink>
            <NavLink to={`/users/${currentUser.id}/events`} name="UserEvents">Your Events</NavLink>
            <NavLink to={`/users/${currentUser.id}`} name="Profile">Profile</NavLink>
            </>
            :
            <></>
            }
            <Search />
            {currentUser ?
            <>
            <button onClick={handleLogOut}> Log Out</button>
            </>
            :
            <NavLink to='/login/' name="LogInForm">Log In</NavLink>
            }
        </nav>
    )
}

export default Navbar