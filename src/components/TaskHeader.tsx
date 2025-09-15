export function TaskHeader() {
  return (
    <div style={{ width: "46rem" }}>
      <header style={{ display: "flex", justifyContent: "space-between" }}>
        <div
          style={{
            display: "flex",
            gap: "0.5rem",
            alignItems: "center",
          }}
        >
          <h4 style={{ fontSize: "0.875rem", color: "var(--blue-100)" }}>
            Tarefas criadas
          </h4>
          <span
            style={{
              fontSize: "0.875rem",
              backgroundColor: "var(--gray-400)",
              padding: "0.125rem 0.5rem",
              fontWeight: 700,
              borderRadius: "100px",
            }}
          >
            0
          </span>
        </div>
        <div
          style={{
            textAlign: "right",
            display: "flex",
            gap: "0.5rem",
            alignItems: "center",
          }}
        >
          <h4 style={{ fontSize: "0.875rem", color: "var(--purple-100)" }}>
            Concluídas
          </h4>
          <span
            style={{
              fontSize: "0.875rem",
              backgroundColor: "var(--gray-400)",
              padding: "0.125rem 0.5rem",
              fontWeight: 700,
              borderRadius: "100px",
            }}
          >
            0 de 25
          </span>
        </div>
      </header>
    </div>
  );
}
