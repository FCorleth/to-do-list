import { useState } from "react";
import completeIcon from "../assets/complete-icon.svg";
import completedIcon from "../assets/completed-icon.svg";

export function CompleteTask({
  isCompleted,
  completeTask,
  id,
}: {
  isCompleted: boolean;
  completeTask: (taskId: number) => void;
  id: number;
}) {
  const [completed, setCompleted] = useState(isCompleted);

  function handleCompleteTask() {
    setCompleted(!completed);
    completeTask(id);
  }
  return (
    <button
      onClick={handleCompleteTask}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        background: "none",
        border: "none",
      }}
    >
      <img src={isCompleted ? completedIcon : completeIcon} alt="Complete" />
    </button>
  );
}
