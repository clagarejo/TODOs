import { useContext } from 'react'
import '../css/CreateTodoButton.css'

import { TodoContext } from '../TodoContext'

function CreateTodoButton(props) {

    const { openModal, setOpenModal } = useContext(TodoContext)

    const handleClick = () => {
        setOpenModal(!openModal)
    }
    
    return (
        <button
            className="CreateTodoButton"
            onClick={handleClick}
        >
            +
        </button>
    )
}

export { CreateTodoButton }