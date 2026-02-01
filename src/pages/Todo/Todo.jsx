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

    const deleteTask = (task)=>{
        const newTasks = tasks.filter(originalTask => originalTask!=task);
        setTasks(newTasks);
    }

    return (
        <div className="todo">
            <h1>Todo</h1>
            <main>
                <TaskForm addTask={addTask}></TaskForm>
                <TaskContainer tasks = {tasks} deleteTask = {deleteTask}></TaskContainer>
            </main>
        </div>
    )
}