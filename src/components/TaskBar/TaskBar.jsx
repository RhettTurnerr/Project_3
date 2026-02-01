import React from "react";

const TaskBar = ({task}) =>{

    const cardContent = task;
    return (
        <div>
            {cardContent}
        </div>
    );
}

export default TaskBar;