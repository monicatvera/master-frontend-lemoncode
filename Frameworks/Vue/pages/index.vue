<template>
  <div class="flex flex-col items-center w-full px-4 mt-4">
    <TaskInput @addTask="addTask" class="mb-6" />
  </div>
  <TaskList
    :tasks="tasks"
    @removeTask="removeTask"
    @toggleTask="toggleTask"
    @editTask="editTask"
  />
</template>

<script setup lang="ts">
import TaskInput from "@/components/TaskInput.vue";
import TaskList from "@/components/TaskList.vue";
import { useStateTaskStore } from "@/composables/task";
import { storeToRefs } from "pinia";

const taskStore = useStateTaskStore();
const { tasks } = storeToRefs(taskStore);

const addTask = (task: string) => {
  if (task.trim()) {
    taskStore.addTask(task.trim());
  }
};

const removeTask = (id: string) => {
  taskStore.removeTask(id);
};

const toggleTask = (id: string) => {
  taskStore.toggleTask(id);
};

const editTask = (id: string, name: string) => {
  if (name.trim()) {
    taskStore.editTask(id, name.trim());
  }
};
</script>
