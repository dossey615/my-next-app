'use client'
import { useState } from "react"
import { TodoCard, TodoCardProps } from "./todo-card"

export const TodoList = () => {

    const [todos, setTodos] = useState<{ text: string, todoFlg: boolean }[]>([
        { text: '牛乳を買う', todoFlg: false },
        { text: '掃除する', todoFlg: true },
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

    //TODO 親コンポーネントからもらって当てはめるようにする
    return (
        <ul>
            {todos.map((item, index) => (
                <TodoCard
                    key={index}
                    text={item.text}
                    todoFlg={item.todoFlg}
                    toggleTodo={() => toggleTodo(index)}
                />
            ))}
        </ul>
    )
}