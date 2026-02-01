import React, {useState} from "react";
import "./TaskBar.css"

const TaskBar = ({task, deleteTask}) =>{
    const [complete, setState] = useState(false);

    const handleClick = ()=> {
        setState(!complete);
    };

    const handleDelete = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        deleteTask(task);
    };

    const cardContent = complete ? 
    (<div className="complete-task">{task}</div>):
    (<div className="incomplete-task">{task}</div>);
    return (
        <div className="taskBar" onClick={handleClick}>
            {cardContent}
            <span className="delete-task" onClick={handleDelete}>X</span>
        </div>
    );
}

export default TaskBar;