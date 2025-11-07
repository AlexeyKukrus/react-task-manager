import { useState, useEffect } from "react";
import TaskItem from "./TaskItem";
import { getTasksListMethod, type Task } from "../dal/api.ts";

interface TasksListProps {
  changeTask: (taskId: string, boardId: string) => void;
  resetTaskInfo: () => void;
}

export default function TasksList({
  changeTask,
  resetTaskInfo,
}: TasksListProps) {
  const [tasks, setTasks] = useState<Task[] | null>(null);
  const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null);

  const handleSelectTask = (task: Task) => {
    setSelectedTaskId(task.id);
    changeTask(task.id, task.attributes.boardId);
  };

  const handleCancel = () => {
    setSelectedTaskId(null);
    resetTaskInfo();
  };

  useEffect(() => {
    getTasksListMethod()
      .then((res) => {
        setTasks(res.data);
      })
      .catch((err) => {
        console.error(err);
        setTasks([]);
      });
  }, []);

  if (tasks === null) {
    return <p>Загрузка...</p>;
  }

  if (tasks.length === 0) {
    return <p>У вас пока нет задач</p>;
  }

  return (
    <div>
      <button onClick={handleCancel}>Сбросить</button>
      <ul>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            selectedTaskId={selectedTaskId}
            onSelect={handleSelectTask}
          />
        ))}
      </ul>
    </div>
  );
}
