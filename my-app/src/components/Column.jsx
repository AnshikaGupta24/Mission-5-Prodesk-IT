function Column({ title, tasks , deleteTask , moveTask}) {
  return (
    <div style={styles.column}>
      <h2>{title}</h2>
      {tasks.map(task => (
        <div key={task.id} style={styles.card}>
          <span>{task.title}</span>
        <button
      onClick={() => deleteTask(task.id)}
      style={styles.deleteBtn}
    >
      ❌
    </button>

        <div style={{ marginTop: "10px" }}>
      {task.status !== "todo" && (
        <button onClick={() => moveTask(task.id, "todo")} style={styles.changeBtn}>
          Move to To Do
        </button>
      )}
      {task.status !== "inprogress" && (
        <button onClick={() => moveTask(task.id, "inprogress")} style={styles.changeBtn}>
          Move to In Progress
        </button>
      )}

      {task.status !== "done" && (
        <button onClick={() => moveTask(task.id, "done")} style={styles.changeBtn}>
          Move to Done
        </button>
      )}
    </div>

     
  </div>
))}

    </div>
  );
}

const styles = {
  column: {
    width: "30%",
    minHeight: "300px",
    backgroundColor: "#f4f4f4",
    padding: "15px",
    borderRadius: "8px",
    border :"1px solid black",
    color: "black"
  },
  card: {
   
    backgroundColor: "#07152b",
    color: "#f4f4f4",
    padding: "10px",
    marginTop: "10px",
    borderRadius: "5px",
  },
  deleteBtn: {
  border: "none",
  background: "transparent",
  fontSize: "20px",
  },
  changeBtn: {
    border: "1px solid black",
    fontSize: "10px",
    
  }
  
};

export default Column;
