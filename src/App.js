import React from "react"
import Joke from "./Joke"

export default function App() {
    return (
        <div>
            <Joke
                setup="What are two things you can never eat for breakfast?"
                punchline="Lunch and Dinner"
            />
            <Joke
                setup="What is always coming but never arrives?"
                punchline="Tomorrow"
            />
            <Joke
                setup="What gets wetter the more it dries? "
                punchline="A towel"
            />
            <Joke
                setup="What can be broken but never held?"
                punchline="A promise"
            />
            <Joke
                setup="What word is spelled incorrectly in every single dictionary?"
                punchline="Incorrectly"
            />
        </div>
    )
}