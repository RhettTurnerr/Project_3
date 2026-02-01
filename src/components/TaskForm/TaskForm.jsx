import "./TaskForm.css";

const TaskForm = ({addTask}) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const taskField = document.querySelector("[name=task]");

    const taskVal = taskField.value;

    taskField.value = "";
    addTask(taskVal);
  };

  return (
    <section className="task-form">
      <form action="#" method="get" onSubmit={handleSubmit}>
        <div className="form-row">
          <label>
            Enter Task:
            <input type="text" name="task" placeholder="EX: take out trash" />
          </label>
          <button type="submit">Add</button>
        </div>
      </form>
    </section>
  );
};

export default TaskForm;
