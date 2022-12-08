import { useState } from "react"
import { useNavigate } from "react-router"


const PasswordChangeForm = ({currentUser}) => {
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        username: currentUser.username,
        password: ""
    })

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData((formData) => ({...formData, [name]: value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        let url = `http://localhost:3000/users/${currentUser.id}`
        fetch(url,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                },
            body: JSON.stringify(formData),
        })
        .then(r => {if(r.ok) {
        r.json().then((user) => {
        navigate(`/users/${user.id}`)}
            )}
    })
}








    return (

        <form onSubmit={handleSubmit}>

            <label htmlFor="password">Password:</label>
            <input type="text" value={formData.password} name="password" placeholder="Enter a new password" onChange={handleChange}></input>

            <button type="submit">Save</button>

        </form>
    )
}

export default PasswordChangeForm