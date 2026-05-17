import { create } from "zustand"
import { Task, Status } from "@/types/task"

interface TaskStore {
  tasks: Task[]

  addTask: (task: Task) => void

  moveTask: (
    taskId: string,
    status: Status
  ) => void
}

export const useTaskStore =
  create<TaskStore>((set) => ({
    tasks: [
      {
        id: "1",
        title: "Design dashboard",
        priority: "HIGH",
        status: "TODO",
      },
      {
        id: "2",
        title: "Build API",
        priority: "MEDIUM",
        status: "IN_PROGRESS",
      },
    ],

    addTask: (task) =>
      set((state) => ({
        tasks: [...state.tasks, task],
      })),

    moveTask: (taskId, status) =>
      set((state) => ({
        tasks: state.tasks.map((task) =>
          task.id === taskId
            ? { ...task, status }
            : task
        ),
      })),
  }))