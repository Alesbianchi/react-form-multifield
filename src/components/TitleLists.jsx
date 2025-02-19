import { useState } from 'react';

//lista di titoli
const initialTasks = ['titolo 1', 'titolo 2', 'titolo 3']


export default function TitleLists() {

    const [tasks, setTasks] = useState(initialTasks);
    const [newTask, setNewTask] = useState('');

    const addTask = e => {
        e.preventDefault();
        const updatedTasks = [...tasks, newTask];
        setTasks(updatedTasks);
    }


    return (
        <>
            <form onSubmit={addTask}>
                <input type="text" value={newTask}
                    onChange={event => { setNewTask(event.target.value) }}
                />
                <button>Invia</button>
            </form >
            <div>
                <h2>Lista Titoli</h2>
                <ul>
                    {tasks.map((task, i) => (
                        <li key={i}>{task}</li>
                    ))}
                </ul>
            </div>
        </>
    );
}