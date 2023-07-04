import React from "react"
import Joke from "./Joke"

export default function App() {
    return (
        <div>
            <Joke 
                setup="I got my daughter a fridge for her birthday."
                punchline="I can' wait to see her face kight up when she opens it"
            />
            <Joke 
                setup="How did the hacker escape the police?"
                punchline="He just ransomware!"
            />
            <Joke 
                setup="Why don't pirates travel on mountain roads?"
                punchline="Scurvy"
            />
            <Joke 
                setup="Why do bees stay in the hive in the winter?"
                punchline="Swarm."
            />
            <Joke 
                setup="What are two things you can never eat for breakfast?"
                punchline="Lunch and Dinner"
            />
        </div>
    )
}