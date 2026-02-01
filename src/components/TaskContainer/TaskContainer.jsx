import React from "react";
import TaskBar from "../TaskBar/TaskBar";
import "./TaskContainer.css"

const TaskContainer = ({tasks}) => {
    const taskList = tasks.map((task)=> (
        <TaskBar task = {task} key = {task}></TaskBar>
    ));
    

    return <section className="task-container">{taskList}</section>;
}

export default TaskContainer;