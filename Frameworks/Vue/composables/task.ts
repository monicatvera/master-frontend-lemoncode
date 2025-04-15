import { defineStore } from 'pinia'
import type { Task } from '@/types'

export const useStateTaskStore = defineStore({
  id: 'StateTaskStore',
  state: () => ({
    tasks: [] as Task[],
  }),
  actions: {
    addTask(name: string) {
      const newTask: Task = {
        id: Math.random().toString(36).substr(2, 9),
        name,
        completed: false,
        timestamp: Date.now(),
      }
      this.tasks.push(newTask)
    },

    toggleTask(id: string) {
      const task = this.tasks.find(t => t.id === id)
      if (task) task.completed = !task.completed
    },

    removeTask(id: string) {
      this.tasks = this.tasks.filter(t => t.id !== id)
    },

    editTask(id: string, name: string) {
      const task = this.tasks.find(t => t.id === id)
      if (task) task.name = name
    },

    getTasks() {
      return this.tasks
    }
  },
  persist: true,
})