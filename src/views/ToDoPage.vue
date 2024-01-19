<template>
  <div class="todo">
    <div class="todo__profile"></div>
    <ul>
      <li v-for="task in tasks" :key="task.id">{{ task.title }}</li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useTasksStore } from '@/stores/counter.js'

const tasksStore = useTasksStore()

const { tasks } = storeToRefs(tasksStore)

onMounted(() => {
  tasksStore.fetchTasks()
})
</script>

<style lang="scss">
.todo {
  height: 100vh;
  background-color: $background-color;

  &__profile {
    height: 35vh;
    background-color: $accent-color1;
  }
}
</style>
