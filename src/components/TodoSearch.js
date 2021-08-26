import { useContext } from 'react';
import '../css/TodoSearch.css'
import { TodoContext } from '../TodoContext';

function TodoSearch() {
    const { searchValue, setSearchValue } = useContext(TodoContext);

    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    };

    return (
        <input
            className="TodoSearch"
            placeholder="Buscar..."
            value={searchValue}
            onChange={onSearchValueChange}
        />
    );
}

export { TodoSearch }