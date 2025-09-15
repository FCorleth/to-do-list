import completeIcon from "../assets/complete-icon.svg";
import completedIcon from "../assets/completed-icon.svg";

export function CompleteTask({ isCompleted }: { isCompleted: boolean }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
      <img src={isCompleted ? completedIcon : completeIcon} alt="Complete" />
    </div>
  );
}
