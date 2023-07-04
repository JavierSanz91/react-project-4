import React from "react"

export default function Joke(promp) {
    return (
        <div>
            {promp.setup && <h3>{promp.setup}</h3>}
            {promp.punchline &&<p>{promp.punchline}</p>}
        </div>
    )
}