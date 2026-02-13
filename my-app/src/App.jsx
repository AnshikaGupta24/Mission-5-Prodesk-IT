import Column from "./components/Column";
import "./App.css";
import { useState } from "react";


function App() {
  const [tasks, setTasks] = useState([

]);
const [input, setInput] = useState("");
const addTask = () => {
  if (input.trim() === "") return;

  const newTask = {
    id: Date.now(),
    title: input,
    status: "todo"
  };

  setTasks([...tasks, newTask]);
  setInput("");
};
const deleteTask = (id) => {
  setTasks(tasks.filter(task => task.id !== id));
};
const moveTask = (id, newStatus) => {
  setTasks(
    tasks.map(task =>
      task.id === id ? { ...task, status: newStatus } : task
    )
  );
};




return (
  <div>
    <h1>The Kanban Task Board</h1>
    <div style={{ marginBottom: "20px", textAlign: "center" }}>
      <input type="text" value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter new task..."
        style={{ padding: "8px", width: "250px" }}/>
      <button onClick={addTask}
         style={{ padding: "8px 12px", marginLeft: "10px" }}>
         Add Task 
      </button>
    </div>
    <div style={styles.board}>
      <Column title="Tasks To-Do"
        tasks={tasks.filter(task => task.status === "todo")}
        deleteTask={deleteTask}
        moveTask={moveTask}/>

      <Column title="Tasks In-Progress"
        tasks={tasks.filter(task => task.status === "inprogress")} 
        deleteTask={deleteTask}
        moveTask={moveTask}/>
        
      <Column title="Tasks Done"
        tasks={tasks.filter(task => task.status === "done")} 
        deleteTask={deleteTask}
        moveTask={moveTask}/>
    </div>
  </div>
    

    
  );
}

const styles = {
  board: {
    width: "900px",
    display: "flex",
    justifyContent: "center",
    alignItem: "center",
    padding: "20px",
  },
};

export default App;
