import React from "react"
import Joke from "./Joke"
import jokesData from "./JokesData"

export default function App() {

    const jokesElement = jokesData.map(joke => {
        return  <Joke 
            setup={joke.setup}
            punchline={joke.punchline}
        />
    }) 
    return (
        <div>
            {jokesElement}
        </div>
    )
}