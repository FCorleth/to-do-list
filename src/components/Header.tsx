import Logo from "../assets/logo.png";

export function Header() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "var(--gray-700)",
      }}
    >
      <div style={{ padding: "4.5rem" }}>
        <img src={Logo} alt="Logo" style={{ width: "7.875rem" }} />
      </div>
    </div>
  );
}
