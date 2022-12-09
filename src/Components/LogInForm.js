import { useState } from "react"
import { useNavigate } from "react-router"
import { Button, Form, Message } from 'semantic-ui-react'


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
        <div className="form-container">
            <Form onSubmit={handleSubmit}>
                <Form.Field>
                  <label style={{color: "white"}} className="form-label">Username</label>
                  <input className="form-input" type="text" value={formData.username} name="username" onChange={handleChange} placeholder='Enter a Username' />
                </Form.Field>
                <Message
                error
                header='Action Forbidden'
                content='You can only sign up for an account once with a given e-mail address.'
                />
                <Form.Field>
                  <label style={{color: "white"}} className="form-label">Password</label>
                  <input className="form-input" type="text" value={formData.password} name="password" onChange={handleChange} placeholder='Enter a password' />
                </Form.Field>
                <Button inverted color='red' type='submit'>Log In</Button>
                <Button inverted color='red' type="submit" onClick={()=>setSignUp(true)}>Sign up!</Button>
            </Form>
            {errors ?
            <h3>{errors}</h3>
            :
            <></>
            }
        </div>
    )
}

export default LogInForm