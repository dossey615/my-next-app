
export interface TodoCardProps {
    text: string
    todoFlg: boolean
    toggleTodo: () => void
}

export const TodoCard = (props: TodoCardProps) => {
    return (
        <li>
            <input
                type="checkbox"
                checked={props.todoFlg}
                onChange={props.toggleTodo}
            />
            {props.text}
            <button>
                remove
            </button>
        </li>
    )
} 