import React, { useState } from "react";

const TaskItem = ({ task, updateTask, deleteTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(task.name);
  const [editedDescription, setEditedDescription] = useState(task.description);

  const toggleComplete = () => {
    updateTask({ ...task, completed: !task.completed });
  };

  const handleEdit = () => {
    if (isEditing) {
      if (!editedName.trim() || !editedDescription.trim()) {
        alert("Both fields are required!");
        return;
      }
      updateTask({ ...task, name: editedName, description: editedDescription });
    }
    setIsEditing(!isEditing);
  };

  return (
    <li className={`task-item ${task.completed ? "completed" : ""}`}>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
          />
          <textarea
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
          ></textarea>
        </>
      ) : (
        <>
          <h3>{task.name}</h3>
          <p>{task.description}</p>
        </>
      )}
      <button onClick={toggleComplete}>
        {task.completed ? "Undo" : "Complete"}
      </button>
      <button onClick={handleEdit}>
        {isEditing ? "Save" : "Edit"}
      </button>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  );
};

export default TaskItem;
