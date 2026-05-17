"use client"

import { useState, type FormEvent } from "react"
import { useRouter } from "next/navigation"
import { useTaskStore } from "@/store/taskstore"
import type { Priority, Status } from "@/types/task"

const priorities: Priority[] = ["LOW", "MEDIUM", "HIGH"]
const statuses: Status[] = ["TODO", "IN_PROGRESS", "DONE"]

export default function TaskForm() {
  const router = useRouter()
  const addTask = useTaskStore((state) => state.addTask)

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [priority, setPriority] = useState<Priority>("MEDIUM")
  const [status, setStatus] = useState<Status>("TODO")
  const [dueDate, setDueDate] = useState("")

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!title.trim()) {
      return
    }

    const id = typeof crypto !== "undefined" && "randomUUID" in crypto
      ? crypto.randomUUID()
      : String(Date.now())

    addTask({
      id,
      title: title.trim(),
      description: description.trim() || undefined,
      priority,
      status,
      dueDate: dueDate || undefined,
    })

    router.push("/dashboard")
  }

  return (
    <form className="form-shell" onSubmit={handleSubmit}>
      <div className="form-field">
        <label className="form-label" htmlFor="title">
          Task title
        </label>
        <input
          id="title"
          className="form-input"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Design the onboarding flow"
          required
        />
      </div>

      <div className="form-field">
        <label className="form-label" htmlFor="description">
          Description
        </label>
        <textarea
          id="description"
          className="form-textarea"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          placeholder="Add any details, context, or acceptance criteria."
        />
      </div>

      <div className="form-row">
        <div className="form-field">
          <label className="form-label" htmlFor="priority">
            Priority
          </label>
          <select
            id="priority"
            className="form-select"
            value={priority}
            onChange={(event) => setPriority(event.target.value as Priority)}
          >
            {priorities.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="form-field">
          <label className="form-label" htmlFor="status">
            Status
          </label>
          <select
            id="status"
            className="form-select"
            value={status}
            onChange={(event) => setStatus(event.target.value as Status)}
          >
            {statuses.map((option) => (
              <option key={option} value={option}>
                {option.replace("_", " ")}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="form-field">
        <label className="form-label" htmlFor="dueDate">
          Due date
        </label>
        <input
          id="dueDate"
          type="date"
          className="form-input"
          value={dueDate}
          onChange={(event) => setDueDate(event.target.value)}
        />
      </div>

      <div className="form-actions">
        <button className="button button-primary" type="submit">
          Save task
        </button>
      </div>
    </form>
  )
}
