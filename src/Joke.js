import React from "react"

export default function Joke(promp) {
    return (
        <div>
            <h3>{promp.setup}</h3>
            <p>{promp.punchline}</p>
            <br />
            <hr />
        </div>
    )
}