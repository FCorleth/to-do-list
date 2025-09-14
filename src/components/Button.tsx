import plusIcon from "../assets/plus-icon.svg";

export function Button() {
  return (
    <button
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
    >
      <p style={{ fontWeight: 700 }}>Criar</p>
      <img src={plusIcon} />
    </button>
  );
}
