
import { useRef } from 'react';

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
    const todoTextInputRef = useRef<HTMLInputElement>(null)

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        const enterText = todoTextInputRef.current!.value

        if (enterText.trim().length === 0) {
            return;
        }
        props.onAddTodo(enterText);
       
    }
    return (
        <form onSubmit={submitHandler}>
            <label>Todo Text</label>
            <input type="text" id="text" ref={todoTextInputRef} />
            <button>Add Todo</button>
        </form>
    )
}

export default NewTodo;