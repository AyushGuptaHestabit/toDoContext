import React, { useState } from 'react';
import toDoContext from './toDoContext';

function ToDoState(props) {
    const [state, setState] = useState([{
        toDo: 'Group Discussion 1',
        status: 2
    }, {
        toDo: 'Group Discussion 2',
        status: 1
    }, {
        toDo: 'Group Discussion 3',
        status: 1
    }])
    return (
        <toDoContext.Provider value={{ state, setState }}>
            {props.children}
        </toDoContext.Provider>
    )
}

export default ToDoState