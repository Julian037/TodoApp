import React from "react"
import './TodoCounter.css'

function TodoCounter({completedTodos, totalTodos, loading}) {
    return(
        <h2 className={`TodoCounter ${!!loading && "TodoCounter--loading"}`}> Has complentado {completedTodos} de {totalTodos} ToDos</h2>
    )
}

export {TodoCounter}