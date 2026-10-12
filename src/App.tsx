import { useState } from "react";

function App() {
const [tasks, setTasks] = useState([
{ id: 1, title: "Learn Git", completed: false },
{ id: 2, title: "Practice GitHub", completed: false },
]);

const [newTask, setNewTask] = useState("");

function addTask() {
if (!newTask.trim()) return;
 
const task = {
  id: Date.now(),
  title: newTask,
  completed: false,
};

setTasks([...tasks, task]);
setNewTask("");
 

}

function toggleTask(id:unknown) {
setTasks(
tasks.map((task) =>
task.id === id
? { ...task, completed: !task.completed }
: task
)
);
}

return (
<div style={{ maxWidth: "500px", margin: "50px auto", fontFamily: "Arial" }}> <h1>Simple Task Manager</h1>

 
  <div>
    <input
      value={newTask}
      onChange={(event) => setNewTask(event.target.value)}
      placeholder="Enter a new task"
    />

    <button onClick={addTask}>Add Task</button>
  </div>

  <ul>
    {tasks.map((task) => (
      <li key={task.id} style={{ marginTop: "12px" }}>
        <label
          style={{
            textDecoration: task.completed ? "line-through" : "none",
          }}
        >
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTask(task.id)}
          />
          {" "}{task.title}
        </label>
      </li>
    ))}
  </ul>
</div>
 

);
}

export default App;
