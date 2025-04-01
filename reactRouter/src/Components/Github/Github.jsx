import React from 'react'
import { useEffect, useState } from 'react'

function Github() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch("https://api.github.com/users/hiteshchaudhary")
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            setData(data)
        }, [])
    })
    return (
        <>
        <div className= "text-center bg-gray-600 m-4 text-white p-4 text-3xl">
            Github Follwers: {data.followers}
        </div>
        <img src= {data.avatar_url} alt= "Git Picture" width= {300}/>
        </>
    )
}

export default Github
