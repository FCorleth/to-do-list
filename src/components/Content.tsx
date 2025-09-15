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

  const taskQuantity = task.length;
  const taskCompleted = task.filter((t) => t.isCompleted).length;

  function createTask(taskValue: string) {
    const newTask: TaskType = {
      id: Math.random(),
      content: taskValue,
      isCompleted: false,
    };
    setTask([...task, newTask]);
  }

  function deleteTask(taskId: number) {
    const tasksWithoutDeletedOne = task.filter((t) => t.id !== taskId);
    setTask(tasksWithoutDeletedOne);
  }

  function completeTask(taskId: number) {
    const updatedTasks = task.map((t) => {
      if (t.id === taskId) {
        return { ...t, isCompleted: !t.isCompleted };
      }
      return t;
    });
    setTask(updatedTasks);
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
        <TaskHeader taskQuantity={taskQuantity} taskCompleted={taskCompleted} />
        {task.length === 0 && <NotTask />}
        {task.map((t) => {
          return (
            <TaskItem
              key={t.id}
              id={t.id}
              content={t.content}
              isCompleted={t.isCompleted}
              deleteTask={deleteTask}
              completeTask={completeTask}
            />
          );
        })}
      </div>
    </div>
  );
}
