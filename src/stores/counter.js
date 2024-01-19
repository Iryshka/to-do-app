import { defineStore } from 'pinia'
import axios from 'axios'

export const useTasksStore = defineStore('tasks', {
  state: () => ({
    tasks: [],
    status: 'IDLE'
  }),
  getters: {},
  actions: {
    async fetchTasks() {
      try {
        const { data } = await axios.get('http://localhost:8000/tasks')
        this.tasks = data
      } catch (error) {
        console.log(error)
      }
    }
  }
})
