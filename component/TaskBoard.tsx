"use client"

import { useTaskStore } from "@/store/taskstore"
import type { Status } from "@/types/task"

const columns: { key: Status; title: string }[] = [
  { key: "TODO", title: "To Do" },
  { key: "IN_PROGRESS", title: "In Progress" },
  { key: "DONE", title: "Completed" },
]

const priorityLabels: Record<string, string> = {
  HIGH: "High",
  MEDIUM: "Medium",
  LOW: "Low",
}

export default function TaskBoard() {
  const tasks = useTaskStore((state) => state.tasks)
  const moveTask = useTaskStore((state) => state.moveTask)

  return (
    <div className="board-grid">
      {columns.map((column) => {
        const columnTasks = tasks.filter((task) => task.status === column.key)

        return (
          <section className="task-column" key={column.key}>
            <h2 className="column-title">
              {column.title} ({columnTasks.length})
            </h2>

            {columnTasks.length === 0 ? (
              <p>No tasks in this column yet.</p>
            ) : (
              columnTasks.map((task) => (
                <article className="task-card" key={task.id}>
                  <h3 className="task-card-title">{task.title}</h3>
                  {task.description ? <p>{task.description}</p> : null}

                  <div className="task-card-meta">
                    <span className="tag priority-pill" data-priority={task.priority}>
                      {priorityLabels[task.priority]}
                    </span>
                    <span className="tag">{task.status.replace("_", " ")}</span>
                    {task.dueDate ? <span className="tag">Due {task.dueDate}</span> : null}
                  </div>

                  <div className="task-action-group">
                    {columns
                      .filter((option) => option.key !== task.status)
                      .map((option) => (
                        <button
                          key={option.key}
                          className="button button-secondary"
                          type="button"
                          onClick={() => moveTask(task.id, option.key)}
                        >
                          Move to {option.title}
                        </button>
                      ))}
                  </div>
                </article>
              ))
            )}
          </section>
        )
      })}
    </div>
  )
}
