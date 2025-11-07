import { createRoot } from "react-dom/client";
import { useState } from "react";

import PageTitle from "./ui/PageTitle";
import TasksList from "./ui/TasksList";
import TaskDetail from "./ui/TaskDetail";

import "./index.css";

createRoot(document.getElementById("root")!).render(<MainPage />);

function MainPage() {
  const [taskId, setTaskId] = useState<string | null>(null);
  const [boardId, setBoardId] = useState<string | null>(null);

  const handleChangeTask = (tid: string, bid: string) => {
    setTaskId(tid);
    setBoardId(bid);
  };
  const handleResetTaskInfo = () => {
    setTaskId(null);
    setBoardId(null);
  };
  return (
    <div>
      <PageTitle />
      <div style={{ display: "flex", gap: "30px" }}>
        <TasksList
          changeTask={handleChangeTask}
          resetTaskInfo={handleResetTaskInfo}
        />
        <TaskDetail taskId={taskId} boardId={boardId} />
      </div>
    </div>
  );
}
