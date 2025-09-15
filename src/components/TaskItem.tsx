import { Button } from "./Button";
import { CompleteTask } from "./CompleteTask";
import trashIcon from "../assets/trash-icon.svg";

export function TaskItem() {
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
        <CompleteTask />
        <p style={{ fontSize: "0.875rem" }}>Descrição da tarefa</p>
      </div>

      <Button
        icon={trashIcon}
        style={{ backgroundColor: "var(--gray-500)", border: "none" }}
      />
    </div>
  );
}
