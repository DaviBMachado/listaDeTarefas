import React, { useState } from "react";

export default function ToDoList() {

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value)
    }

    function addTask() {

        if (newTask.trim() !== "") {
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }


    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    function moveTaskUp(index) {
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks)
        }
    }

    function moveTaskDown(index) {
        if(index < tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks)
        }
    }

    return (<div className="to-do-list">
        <h1>To-Do-List</h1>
        <div>
            <input type="text" className="input" placeholder="Coloque uma tarefa" value={newTask} onChange={handleInputChange} />
            <button className="add-button" onClick={addTask}>
                Add
            </button>

            <ol>
                {tasks.map((task, index) =>
                    <li key={index}>
                        <span className="text">{task}</span>
                        <button className="delete-button" onClick={() => deleteTask(index)}>
                            Deletar
                        </button>
                        <button className="move-button" onClick={() => moveTaskUp(index)}>
                            Cima
                        </button>
                        <button className="move-button" onClick={() => moveTaskDown(index)}>
                            Baixo
                        </button>
                    </li>
                )}
            </ol>
        </div>
    </div>)
}