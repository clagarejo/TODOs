import { useContext } from "react";

import { Modal } from "../Modal";
import { TodoList } from "./TodoList";
import { TodoForm } from "./TodoForm";
import { TodoItem } from "./TodoItem";
import { TodoSearch } from "./TodoSearch";
import { TodoContext } from '../TodoContext'
import { TodoCounter } from "./TodoCounter";
import { CreateTodoButton } from "./CreateTodoButtom";
import { LoadingTodo } from './LoadingTodo'
import { ErrorTodo } from './ErrorTodo'

function AppUI() {
    const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal
    } = useContext(TodoContext);

    return (
        <>
            <TodoCounter />
            <TodoSearch />

            <TodoList>
                {error && <ErrorTodo error={error} />}
                {loading && <LoadingTodo />}
                {(!loading && !searchedTodos.length) && <p>¡Crea tu primer TODO 🤙🏾!</p>}

                {searchedTodos.map(todo => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                ))}
            </TodoList>
            {openModal && (
                <Modal>
                    <TodoForm />
                </Modal>
            )}
            <CreateTodoButton
                setOpenModal={setOpenModal}
            />
        </>
    )
}

export { AppUI }