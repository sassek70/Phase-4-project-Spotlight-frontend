import { NavLink } from "react-router-dom";
import Search from "./Search";
import { Button, } from 'semantic-ui-react'



const Navbar = ({handleLogOut, currentUser}) => {
    return (
        <nav className="link-container">
            <NavLink className="link-button" to='/' name="Welcome">
                <Button inverted color='red'>Home</Button>
            </NavLink>
            <NavLink className="link-button" to='/allvenues' name="Venues">
                <Button inverted color='red'>All Venues</Button>
            </NavLink>
            <NavLink className="link-button" to='/allevents' name="Events">
                <Button inverted color='red'>All Events</Button>
            </NavLink>
            {currentUser?
            <>
            {/* <NavLink to={`/users/${currentUser.id}/venues`} name="UserVenues">Your Venues</NavLink> */}
            <NavLink className="link-button"to={`/users/${currentUser.id}/user_events`} name="UserEvents">
                <Button inverted color='red'>Your Events</Button>
            </NavLink>
            <NavLink className="link-button"to={`/users/${currentUser.id}`} name="Profile">
                <Button inverted color='red'>Profile</Button>
            </NavLink>
            </>
            :
            <></>
            }
            {/* <Search /> */}
            {currentUser ?
            <>
            <Button inverted color='red' onClick={handleLogOut}>Log Out</Button>
            </>
            :
            <NavLink className="link-button" to='/login/' name="LogInForm">
                <Button inverted color='red'>Log in/Sign up</Button>
            </NavLink>
            }
        </nav>
    )
}

export default Navbar