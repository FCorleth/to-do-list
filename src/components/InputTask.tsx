import { Button } from "./Button";

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
      <Button />
    </div>
  );
}
