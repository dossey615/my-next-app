'use client'
import { useState } from "react"
import { TodoCard } from "./todo-card"

interface TodoDetail {
    id: string
    text: string
    todoFlg: boolean
}

export const TodoList = () => {

    const [todos, setTodos] = useState<TodoDetail[]>([
        { id: 'id01', text: '牛乳を買う', todoFlg: false },
        { id: 'id02', text: '掃除する', todoFlg: true },
    ])

    const toggleTodo = (index: number) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo, i) =>
                i === index
                    ? { ...todo, todoFlg: !todo.todoFlg }
                    : todo
            )
        )
    }

    const deleteTodo = (id: string) => {
        setTodos(prevTodos =>
            prevTodos.filter((todo, i) =>
                todo.id !== id
            )
        )
    }

    //TODO 親コンポーネントからもらって当てはめるようにする
    return (
        <ul>
            {todos.map((todo, index) => (
                <TodoCard
                    key={index}
                    id={todo.id}
                    text={todo.text}
                    todoFlg={todo.todoFlg}
                    toggleTodo={() => toggleTodo(index)}
                    deleteHandle={deleteTodo}
                />
            ))}
        </ul>
    )
}