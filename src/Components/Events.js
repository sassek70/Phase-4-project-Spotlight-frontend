import { useEffect, useState } from "react"

const Events = () => {
    const [eventList, setEventList] = useState([])

    useEffect (()=> {
        fetch (`http://localhost:3000/events`)
        .then(res=> res.json())
        .then(eventArray => setEventList(eventArray))
    },[])

    console.log(eventList)
    return (
        <>
            Event list goes here
        </>

    )
}

export default Events