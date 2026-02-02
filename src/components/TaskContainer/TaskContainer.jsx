import React from "react";
import TaskBar from "../TaskBar/TaskBar";
import "./TaskContainer.css"

const TaskContainer = ({tasks, deleteTask}) => {
    const taskList = tasks.map((task)=> (
        <TaskBar task = {task} key = {task} deleteTask = {deleteTask}></TaskBar>
    ));
    

    return <section className="task-container">{taskList}</section>;
}

export default TaskContainer;