export default function App() {
  interface Task {
    id: number
    title: string
    isDone: boolean
  }
  const tasks: Task[] = [
    { id: 1, title: "Купить продукты на неделю", isDone: false },
    { id: 2, title: "Полить цветы", isDone: true },
    { id: 3, title: "Сходить на тренировку", isDone: false },
  ]
  return (
    <>
      <h1>Список задач</h1>
      <ul>
        {tasks.map((task) => {
          return (
            <li key={task.id}>
              <div>
                <p>
                  {task.title}
                </p>
                <input 
                  type='checkbox'
                  checked={task.isDone}
                />
              </div>
            </li>
          )
        })}
      </ul>
    </>
  )
}