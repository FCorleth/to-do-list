import { Button } from "./Button";
import plusIcon from "../assets/plus-icon.svg";

export function InputTask() {
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
