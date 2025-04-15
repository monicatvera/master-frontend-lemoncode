<template>
  <div class="flex gap-2 flex gap-2 w-full max-w-xl mx-auto">
    <input
      v-model="newTask"
      @keydown.enter="addTask"
      placeholder="Escribe una tarea..."
      class="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-300 border border-white/20 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
    />
    <button
      @click="addTask"
      class="px-4 py-2 rounded-lg bg-green-500 hover:bg-green-600 text-white transition"
    >
      Agregar
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const newTask = ref("");
const emit = defineEmits(["addTask"]);

const addTask = () => {
  if (newTask.value.trim() === "") return;
  emit("addTask", newTask.value.trim());
  newTask.value = "";
};
</script>
