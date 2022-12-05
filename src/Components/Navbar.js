import { NavLink } from "react-router-dom";
import Search from "./Search";


const Navbar = () => {
    return (
        <nav>
            <NavLink to='/' name="Welcome">Home</NavLink>
            {/* <NavLink to='/createaccount/' name="New User Form">Create account</NavLink> */}
            <NavLink to='/login/' name="LogInForm">Log In</NavLink>
            <NavLink to='/users/:id/venues' name="UserVenues">Venues</NavLink>
            <NavLink to='/users/:id/events' name="UserEvents">Your Events</NavLink>
            <NavLink to='/allvenues' name="Venues">All Venues</NavLink>
            <NavLink to='/allevents' name="Events">All Events</NavLink>
            <Search />
        </nav>
    )
}

export default Navbar