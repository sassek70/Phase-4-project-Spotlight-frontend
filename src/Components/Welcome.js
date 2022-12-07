

const Welcome = ({currentUser}) => {
    return (

        <>
        {currentUser ?

        <h1>Welcome {currentUser.username}</h1>
        :    
        <h1>Welcome to Spotlight</h1>
        }
        </>
    )
}

export default Welcome