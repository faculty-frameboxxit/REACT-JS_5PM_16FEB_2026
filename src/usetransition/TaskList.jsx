function TaskList({ tasks, onToggle }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li
          key={task.id}
          onClick={() => onToggle(task.id)}
          style={{
            cursor: "pointer",
            textDecoration: task.completed ? "line-through" : "none",
          }}
        >
          {task.text}
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
