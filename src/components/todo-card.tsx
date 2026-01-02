
export interface TodoCardProps {
    id: string
    text: string
    todoFlg: boolean
    toggleTodo: () => void
    deleteHandle: (id: string) => void
}

export const TodoCard = (props: TodoCardProps) => {

    const deleteTodo = () => {
        props.deleteHandle(props.id)
    }

    return (
        <li>
            <input
                type="checkbox"
                checked={props.todoFlg}
                onChange={props.toggleTodo}
            />
            {props.text}
            <button onClick={deleteTodo}>
                remove
            </button>
        </li>
    )
} 