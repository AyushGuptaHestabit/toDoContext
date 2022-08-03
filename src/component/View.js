import React, { useContext, useState, useEffect } from 'react';
import toDoContext from '../context/todos/toDoContext';

function View() {
    const [toDo, setToDo] = useState(useContext(toDoContext).state);
    const [toDoActive, setToDoActive] = useState('');
    const [toDoCompleted, setToDoCompleted] = useState('');
    const [show, setShow] = useState(1);
    const [newToDo, setNewToDo] = useState('');
    const fun = useContext(toDoContext).setState;
    const setToDoList = (list) => {
        console.log(list)
        setToDo(list);
        fun(list);
        setNewToDo('');
    }

    useEffect(() => {
        let active = [];
        let completed = [];
        if (toDo) {
            toDo.map((element, idx) => {
                if (element.status === 2) {
                    completed = [...completed, element];
                } else {
                    active = [...active, element];
                }
            })
            setToDoActive(active)
            setToDoCompleted(completed)
        }
    }, [toDo])

    const submitHandler = (e) => {
        e.preventDefault();
        let obj = {
            toDo: newToDo,
            status: 1
        };
        let toDoList = toDo;
        if (newToDo && obj) {
            toDoList = [...toDoList, obj];
        }
        setToDoList(toDoList);
    }


    return (
        <>
            <div className="todoapp stack-large">
                <h1>Todo using Context</h1>
                <form onSubmit={(e) => submitHandler(e)}>
                    <h2 className="label-wrapper">
                        <label htmlFor="new-todo-input" className="label__lg">
                            What needs to be done?
                        </label>
                    </h2>
                    <input
                        type="text"
                        id="new-todo-input"
                        className="input input__lg"
                        name="text"
                        autoComplete="off"
                        value={newToDo}
                        onChange={(e) => setNewToDo(e.target.value)}
                    />
                    <button type="submit" className="btn btn__primary btn__lg">
                        Add
                    </button>
                </form>
                <div className="filters btn-group stack-exception">
                    <button type="button" className="btn toggle-btn" onClick={() => setShow(1)} aria-pressed="true">
                        <span className="visually-hidden">Show </span>
                        <span>all</span>
                        <span className="visually-hidden"> tasks</span>
                    </button>
                    <button type="button" className="btn toggle-btn" onClick={() => setShow(2)} aria-pressed="true">
                        <span className="visually-hidden">Show </span>
                        <span>Active</span>
                        <span className="visually-hidden"> tasks</span>
                    </button>
                    <button type="button" className="btn toggle-btn" onClick={() => setShow(3)} aria-pressed="true">
                        <span className="visually-hidden">Show </span>
                        <span>Completed</span>
                        <span className="visually-hidden"> tasks</span>
                    </button>
                </div>
                {show === 1 &&
                    <>
                        <h2 id="list-heading">
                            {toDo ? toDo.length : 'No'} tasks remaining
                        </h2>
                        {toDo ?
                            <>
                                <ul
                                    role="list"
                                    className="todo-list stack-large stack-exception"
                                    aria-labelledby="list-heading"
                                >
                                    {toDo.map((element, idx) => {
                                        return (
                                            <li className="todo stack-small border border-dark py-3" key={idx}>
                                                <label className="todo-label" htmlFor="todo-2">
                                                    {element.toDo}
                                                </label>
                                                {element.status === 2 ?
                                                    <h5 className='text-center text-success font-weight-bold'>Completed</h5>
                                                    :
                                                    <h5 className='text-center text-info font-weight-bold'>Active</h5>
                                                }
                                                {/* <div className="btn-group">
                                                    <button type="button" className="btn">
                                                        Edit <span className="visually-hidden">Repeat</span>
                                                    </button>
                                                    <button type="button" className="btn btn__danger">
                                                        Delete <span className="visually-hidden">Repeat</span>
                                                    </button>
                                                </div> */}
                                            </li>
                                        )
                                    })}
                                </ul>
                            </>
                            :
                            ""
                        }
                    </>
                }
                {show === 2 &&
                    <>
                        <h2 id="list-heading">
                            {toDoActive.length} tasks remaining
                        </h2>
                        {toDoActive ?
                            <>
                                <ul
                                    role="list"
                                    className="todo-list stack-large stack-exception"
                                    aria-labelledby="list-heading"
                                >
                                    {toDoActive.map((element, idx) => {
                                        return (
                                            <li className="todo stack-small border border-dark py-3" key={idx}>
                                                <label className="todo-label" htmlFor="todo-2">
                                                    {element.toDo}
                                                </label>
                                                {element.status === 2 ?
                                                    <h5 className='text-center text-success font-weight-bold'>Completed</h5>
                                                    :
                                                    <h5 className='text-center text-info font-weight-bold'>Active</h5>
                                                }
                                                {/* <div className="btn-group">
                                                    <button type="button" className="btn">
                                                        Edit <span className="visually-hidden">Repeat</span>
                                                    </button>
                                                    <button type="button" className="btn btn__danger">
                                                        Delete <span className="visually-hidden">Repeat</span>
                                                    </button>
                                                </div> */}
                                            </li>
                                        )
                                    })}
                                </ul>
                            </>
                            :
                            ""
                        }
                    </>
                }
                {show === 3 &&
                    <>
                        <h2 id="list-heading">
                            {toDoCompleted ? toDoCompleted.length : 'No'} tasks remaining
                        </h2>
                        {toDoCompleted ?
                            <>
                                <ul
                                    role="list"
                                    className="todo-list stack-large stack-exception"
                                    aria-labelledby="list-heading"
                                >
                                    {toDoCompleted.map((element, idx) => {
                                        return (
                                            <li className="todo stack-small border border-dark py-3" key={idx}>
                                                <label className="todo-label" htmlFor="todo-2">
                                                    {element.toDo}
                                                </label>
                                                {element.status === 2 ?
                                                    <h5 className='text-center text-success font-weight-bold'>Completed</h5>
                                                    :
                                                    <h5 className='text-center text-info font-weight-bold'>Active</h5>
                                                }
                                                {/* <div className="btn-group">
                                                    <button type="button" className="btn">
                                                        Edit <span className="visually-hidden">Repeat</span>
                                                    </button>
                                                    <button type="button" className="btn btn__danger">
                                                        Delete <span className="visually-hidden">Repeat</span>
                                                    </button>
                                                </div> */}
                                            </li>
                                        )
                                    })}
                                </ul>
                            </>
                            :
                            ""
                        }
                    </>
                }
            </div>
        </>
    )
}

export default View