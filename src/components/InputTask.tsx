import { useState } from "react";
import { Button } from "./Button";
import plusIcon from "../assets/plus-icon.svg";

export function InputTask({
  createTask,
}: {
  createTask: (task: string) => void;
}) {
  const [taskValue, setTaskValue] = useState("");

  function handleTaskValue(event: React.ChangeEvent<HTMLInputElement>) {
    setTaskValue(event.target.value);
  }

  function handleCreateNewTask() {
    createTask(taskValue);
    setTaskValue("");
  }

  return (
    <div
      style={{
        display: "flex",
        maxWidth: "46rem",
        width: "100%",
        gap: "0.5rem",
      }}
    >
      <input
        value={taskValue}
        onChange={handleTaskValue}
        type="text"
        placeholder="Adicionar uma nova tarefa"
        style={{
          backgroundColor: "var(--gray-500)",
          border: "none",
          padding: "1rem",
          borderRadius: "8px",
          color: "var(--gray-300)",
          width: "100%",
        }}
      />
      <Button
        onClick={handleCreateNewTask}
        text="Criar"
        icon={plusIcon}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          padding: "1rem",
          backgroundColor: "var(--blue-200)",
          border: "none",
          borderRadius: "8px",
          color: "var(--gray-100)",
          cursor: "pointer",
        }}
      />
    </div>
  );
}
