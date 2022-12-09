

const Welcome = ({currentUser}) => {
    return (

        <div className="welcome">
        {currentUser ?

        <h1>Welcome {currentUser.username}</h1>
        :    
        <h1>Welcome to Spotlight</h1>
        }
        </div>
    )
}

export default Welcome