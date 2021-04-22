import React, { useState, useEffect } from 'react'
import axios from "axios";

const Github = () => {
    const [user, setUser] = useState([]);
    const gitUrl = "https://api.github.com/users/jpskonee";
    const getData = async () => {
        const res = await axios.get(gitUrl);
        setUser(res.data);
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <div>
            <div>
                <h1> {user && user.login} </h1>
                <img src={user && user.avatar_url}
                alt="Avatar"
                />
                <div> Number of Repos: {user && user.public_repos}</div>
            </div>
        </div>
    )
}

export default Github
