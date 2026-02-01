import React, {useState} from "react";
import "./TaskBar.css"

const TaskBar = ({task}) =>{
    const [complete, setState] = useState(false);

    const handleClick = ()=> {
        setState(!complete);
        console.log("test");
    };

    const cardContent = complete ? 
    (<div className="complete-task">{task}</div>):
    (<div className="incomplete-task">{task}</div>);
    return (
        <div className="taskBar" onClick={handleClick}>
            {cardContent}
        </div>
    );
}

export default TaskBar;