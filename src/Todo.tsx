import { useState } from "react"
import List from "./List"
import { saveData } from "./List"

export default function Todo() {
    let [task, setTask] = useState('')

    function handleChange(e:React.ChangeEvent<HTMLInputElement>){
        setTask(e.target.value)
    }

    function handleSubmit(e:React.ChangeEvent<HTMLFormElement>){
        e.preventDefault()
        const li = document.createElement('li')
        const span = document.createElement('span')
        const ul = document.querySelector('ul') as HTMLUListElement
        const input = document.querySelector('input[type="text"]') as HTMLInputElement
        span.textContent = '\u00d7'
        li.textContent = task
        li.appendChild(span)
        ul.appendChild(li)
        saveData()
        input.value = ''
    }

    return (
    <div className="todo-app">
        <h2>To-Do List<img src="src/assets/icon.png"></img></h2>
        <form onSubmit={handleSubmit} className="row">
            <input onChange={handleChange} required type="text" placeholder="Add your text"></input>
            <button type="submit">Add</button>
        </form>
        <List/>
    </div>
    )
}