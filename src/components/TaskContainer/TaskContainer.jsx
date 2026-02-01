import React from "react";
import TaskBar from "../TaskBar/TaskBar";

const TaskContainer = ({tasks}) => {
    const taskList = tasks.map((task)=> 
        <TaskBar task = {task}></TaskBar>
    );
    

    return;
}

export default TaskContainer;