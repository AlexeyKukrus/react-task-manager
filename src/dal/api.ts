export interface Task {
  id: string;
  type: string;
  attributes: {
    title: string;
    boardId: string;
    status: number;
    addedAt: string;
    priority: number;
    attachmentsCount?: number;
  };
}
export interface TaskInfo {
  id: string;
  type: string;
  attributes: {
    title: string;
    order: number;
    deadline: string | null;
    startDate: string | null;
    addedAt: string;
    priority: number;
    status: number;
    updatedAt: string;
    boardId: string;
    boardTitle: string;
    description: string;
    attachments: any[];
  };
}

interface GlobalTaskListResponse {
  data: Task[];
}
interface GetTaskOutputResponse {
  data: TaskInfo;
}

const apiKey: string = "";

type GetTasksList = () => Promise<GlobalTaskListResponse>;
type GetTaskDetails = (
  boardId: string,
  taskId: string,
) => Promise<GetTaskOutputResponse>;

export const getTasksListMethod: GetTasksList = () => {
  return fetch(`https://trelly.it-incubator.app/api/1.0/boards/tasks`, {
    headers: {
      accept: "application/json",
      "api-key": apiKey,
    },
  })
    .then((res) => res.json())
    .catch((err) => {
      throw new Error(err);
    });
};

export const getTaskDetailsMethod: GetTaskDetails = (boardId, taskId) => {
  return fetch(
    `https://trelly.it-incubator.app/api/1.0/boards/${boardId}/tasks/${taskId}`,
    {
      headers: {
        accept: "application/json",
        "api-key": apiKey,
      },
    },
  )
    .then((res) => res.json())
    .catch((err) => {
      throw new Error(err);
    });
};
