import Clipboard from "../assets/Clipboard.svg";

export function NotTask() {
  return (
    <div
      style={{
        textAlign: "center",
        color: "var(--gray-300)",
        fontSize: "1rem",
        padding: "4rem ",
      }}
    >
      <img src={Clipboard} alt="Clipboard" />
      <h4 style={{ fontWeight: 700, marginTop: "1rem" }}>
        Você ainda não tem tarefas cadastradas
      </h4>
      <h5 style={{ fontWeight: 400 }}>
        Crie tarefas e organize seus itens a fazer
      </h5>
    </div>
  );
}
