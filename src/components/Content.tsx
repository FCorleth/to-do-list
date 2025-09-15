import { useState } from "react";
import { InputTask } from "./InputTask";
import { NotTask } from "./NotTask";
import { TaskHeader } from "./TaskHeader";
import { TaskItem } from "./TaskItem";

type TaskType = {
  id: number;
  content: string;
  isCompleted: boolean;
};

const Tasks: TaskType[] = [
  {
    id: 1,
    content:
      "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
    isCompleted: false,
  },
  {
    id: 2,
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    isCompleted: true,
  },
];

export function Content() {
  const [task, setTask] = useState(Tasks);

  function createTask(taskValue: string) {
    const newTask: TaskType = {
      id: Math.random(),
      content: taskValue,
      isCompleted: false,
    };
    setTask([...task, newTask]);
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "4rem",
      }}
    >
      <InputTask createTask={createTask} />
      <div>
        <TaskHeader />
        {task.length === 0 && <NotTask />}
        {task.map((t) => {
          return (
            <TaskItem
              key={t.id}
              content={t.content}
              isCompleted={t.isCompleted}
            />
          );
        })}
      </div>
    </div>
  );
}
