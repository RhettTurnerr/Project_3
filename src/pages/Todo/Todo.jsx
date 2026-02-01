import "./Todo.css"
import React, {useState} from "react"
import TaskForm from "../../components/TaskForm/TaskForm"
import TaskContainer from "../../components/TaskContainer/TaskContainer";

export default function Todo(){
    const [tasks, setTasks] = useState([]);

    const addTask = (task)=> {
        const newTasks = [...tasks, task]
        setTasks(newTasks);
    }


    return (
        <div className="todo">
            <h1>Todo</h1>
            <main>
                <TaskForm addTask={addTask}></TaskForm>
                <TaskContainer></TaskContainer>
            </main>
        </div>
    )
}