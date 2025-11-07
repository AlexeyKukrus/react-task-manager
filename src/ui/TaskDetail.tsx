import { useState, useEffect } from "react";

import s from "../App.module.css";
import { getTaskDetailsMethod, type TaskInfo } from "../dal/api.ts";

interface TaskDetailProps {
  taskId: string | null;
  boardId: string | null;
}

export default function TaskDetail({ taskId, boardId }: TaskDetailProps) {
  const [selectedTask, setSelectedTask] = useState<TaskInfo | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    if (taskId == null || boardId == null) {
      setSelectedTask(null);
      setIsLoading(false);
      return;
    }

    getTaskDetailsMethod(boardId, taskId)
      .then((json) => {
        setSelectedTask(json.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setSelectedTask(null);
        setIsLoading(false);
      });
  }, [taskId, boardId]);

  return (
    <>
      {selectedTask !== null && (
        <div className={s.task}>
          <h2>Информация о задаче:</h2>
          <p>{isLoading ? "Loading..." : selectedTask?.attributes.title}</p>
        </div>
      )}
    </>
  );
}
