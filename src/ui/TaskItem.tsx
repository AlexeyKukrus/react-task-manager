import s from "../App.module.css";
import type { Task } from "../dal/api.ts";

const priority: string[] = ["zero", "low", "middle", "high", "super"];

interface TaskItemProps {
  task: Task;
  selectedTaskId: string | null;
  onSelect: (task: Task) => void;
}

export default function TaskItem({
  task,
  selectedTaskId,
  onSelect,
}: TaskItemProps) {
  const isSelected = selectedTaskId === task.id;

  return (
    <li
      className={`${s.task} ${s[priority[task.attributes.priority]]} ${isSelected ? s.selected : ""}`}
      onClick={() => onSelect(task)}
    >
      <div className={s.flex}>
        <input
          type="checkbox"
          checked={task.attributes.status === 2}
          readOnly
        />
        <p className={task.attributes.status === 2 ? s.done : ""}>
          {task.attributes.title}
        </p>
      </div>
      <p>
        Дата создания: {new Date(task.attributes.addedAt).toLocaleDateString()}
      </p>
    </li>
  );
}
