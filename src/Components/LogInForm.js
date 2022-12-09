import { useState } from "react"
import { useNavigate } from "react-router"


const LogInForm = ({setCurrentUser}) => {
    const navigate = useNavigate()
    const [signup, setSignUp] = useState(false)
    const [errors, setErrors] = useState()

    const [formData, setFormData] = useState({
        username: "",
        password: ""
    })

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData((formData) => ({...formData, [name]: value}))
    }


    const handleSubmit = (e) => {
        e.preventDefault()

        let url = `${process.env.REACT_APP_BACKEND_URL}/login`
        if (signup) url = `${process.env.REACT_APP_BACKEND_URL}/users`
        fetch(url,{method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then(r => {if(r.ok) {
        r.json().then((user) => {
        console.log(user)
        setCurrentUser(user)
        localStorage.username = user.id
        console.log(user)
        navigate(`/users/${user.id}/user_events`)}
            )}
            else {
                r.json().then(json => setErrors(json.error))
            }
    })
}
    



    return ( 
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input type="text" value={formData.username} name="username" placeholder="Enter a Username" onChange={handleChange}></input>

                <label htmlFor="password">Password:</label>
                <input type="text" value={formData.password} name="password" placeholder="Enter a password" onChange={handleChange}></input>

                <button type="submit">Log In</button>
                <button type="submit" onClick={()=>setSignUp(true)}>Sign up!</button>

            </form>
            {errors ?
            <h1>{errors}</h1>
            :
            <></>
            }
        </>
    )
}

export default LogInForm