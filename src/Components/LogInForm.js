import { useState } from "react"


const LogInForm = ({onLogIn}) => {
    const [signup, setSignUp] = useState(false)
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

        let url = 'http://localhost:3000/login'
        if (signup) url = 'http://localhost:3000/users'
        fetch(url,{method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((r) => r.json())
        .then((user) => {
        console.log(user)
        onLogIn(user)
        localStorage.username = user.id
        
    })
}
    



    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input type="text" value={formData.username} name="username" placeholder="Enter a Username" onChange={handleChange}></input>

            <label htmlFor="password">Password:</label>
            <input type="text" value={formData.password} name="password" placeholder="Enter a password" onChange={handleChange}></input>

            <button type="submit">Log In</button>
            <button type="submit" onClick={()=>setSignUp(true)}>Sign up!</button>
            
        </form>
    )
}

export default LogInForm