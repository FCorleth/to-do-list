import { InputTask } from "./InputTask";
import { Task } from "./Task";

export function Content() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <InputTask />
      <Task />
    </div>
  );
}
