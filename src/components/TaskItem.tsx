import { Button } from "./Button";
import { CompleteTask } from "./CompleteTask";
import trashIcon from "../assets/trash-icon.svg";

type TaskItemProps = {
  id: number;
  content: string;
  isCompleted: boolean;
  deleteTask: (taskId: number) => void;
};

export function TaskItem({
  id,
  content,
  isCompleted,
  deleteTask,
}: TaskItemProps) {
  function handleDeleteTask() {
    deleteTask(id);
  }

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        padding: "1rem",
        backgroundColor: "var(--gray-500)",
        border: "1px solid var(--gray-400)",
        borderRadius: "8px",
        marginTop: "1.25rem",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "0.875rem" }}>
        <CompleteTask isCompleted={isCompleted} />
        <p style={{ fontSize: "0.875rem" }}>{content}</p>
      </div>

      <Button
        onClick={handleDeleteTask}
        icon={trashIcon}
        style={{ backgroundColor: "var(--gray-500)", border: "none" }}
      />
    </div>
  );
}
