import { Content } from "./components/Content";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <div
        style={{
          position: "relative",
          marginTop: "-1.5rem",
        }}
      >
        <Content />
      </div>
    </>
  );
}

export default App;
