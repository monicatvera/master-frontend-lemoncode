<template>
  <div class="w-full mt-8 px-6">
    <div
      class="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 max-w-screen-xl mx-auto"
    >
      <!-- Tareas pendientes -->
      <div class="bento-box w-full">
        <h2 class="text-2xl font-bold text-indigo-400 mb-4">
          Tareas pendientes
        </h2>
        <ul v-if="incompleteTasks.length" class="space-y-4">
          <li
            v-for="task in incompleteTasks"
            :key="task.id"
            class="bg-white/10 rounded-lg px-4 py-3"
          >
            <div
              class="flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div class="flex items-start gap-2 flex-1">
                <input
                  type="checkbox"
                  :checked="task.completed"
                  @change="toggleTask(task.id)"
                  class="form-checkbox h-5 w-5 text-green-500 mt-1"
                />
                <template v-if="idEditable === task.id">
                  <input
                    v-model="editedTaskName"
                    class="w-full px-3 py-2 rounded bg-white/20 text-white border border-white/30 focus:outline-none"
                    placeholder="Edita tu tarea..."
                    @keyup.enter="saveTask(task.id)"
                  />
                </template>
                <template v-else>
                  <span
                    :class="{
                      'line-through text-gray-300': task.completed,
                      'text-white': !task.completed,
                    }"
                    class="text-lg break-words"
                  >
                    {{ task.name }}
                  </span>
                </template>
              </div>
              <div class="flex flex-wrap gap-2 justify-end md:justify-start">
                <button @click="removeTask(task.id)" class="btn-red">
                  <Icon name="fxemoji:ballottboxwithscriptx" />
                </button>
                <template v-if="idEditable === task.id">
                  <button @click="cancelEdit" class="btn-yellow">
                    <Icon name="lets-icons:cancel-fill" />
                  </button>
                  <button @click="saveTask(task.id)" class="btn-green">
                    <Icon name="lets-icons:check-fill" />
                  </button>
                </template>
                <button
                  v-else
                  @click="editTask(task.id, task.name)"
                  class="btn-yellow"
                >
                  <Icon name="fxemoji:pencil" />
                </button>
              </div>
            </div>
          </li>
        </ul>
        <div
          v-else
          class="flex items-center justify-center text-white text-lg font-medium min-h-[120px]"
        >
          No tienes tareas pendientes.
        </div>
      </div>

      <!-- Tareas completadas -->
      <div class="bento-box w-full">
        <h2 class="text-2xl font-bold text-green-400 mb-4">Completadas</h2>
        <ul v-if="completedTasks.length" class="space-y-4">
          <li
            v-for="task in completedTasks"
            :key="task.id"
            class="bg-white/10 rounded-lg px-4 py-3 flex justify-between items-start gap-2"
          >
            <div class="flex items-start gap-2">
              <input
                type="checkbox"
                :checked="task.completed"
                @change="toggleTask(task.id)"
                class="form-checkbox h-5 w-5 text-green-500 mt-1"
              />
              <span class="line-through text-gray-300 text-lg break-words">
                {{ task.name }}
              </span>
            </div>
            <button @click="removeTask(task.id)" class="btn-red">
              <Icon name="fxemoji:ballottboxwithscriptx" />
            </button>
          </li>
        </ul>
        <div
          v-else
          class="flex items-center justify-center text-white text-lg font-medium min-h-[120px]"
        >
          No tienes tareas completadas.
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import type { Task } from "@/types";

const props = defineProps<{ tasks: Task[] }>();
const emit = defineEmits(["toggleTask", "removeTask", "editTask"]);

const idEditable = ref<string | null>(null);
const editedTaskName = ref("");

const incompleteTasks = computed(() => props.tasks.filter((t) => !t.completed));
const completedTasks = computed(() => props.tasks.filter((t) => t.completed));

const toggleTask = (id: string) => emit("toggleTask", id);
const removeTask = (id: string) => emit("removeTask", id);

const editTask = (id: string, name: string) => {
  idEditable.value = id;
  editedTaskName.value = name;
};

const saveTask = (id: string) => {
  if (editedTaskName.value.trim()) {
    emit("editTask", id, editedTaskName.value.trim());
  }
  cancelEdit();
};

const cancelEdit = () => {
  idEditable.value = null;
  editedTaskName.value = "";
};
</script>

<style scoped>
.btn-red {
  @apply px-2 py-1 rounded bg-red-500 hover:bg-red-600 text-white transition;
}
.btn-yellow {
  @apply px-2 py-1 rounded bg-yellow-500 hover:bg-yellow-600 text-white transition;
}
.btn-green {
  @apply px-2 py-1 rounded bg-green-500 hover:bg-green-600 text-white transition;
}
.bento-box {
  @apply bg-white/5 rounded-2xl p-6 shadow-xl backdrop-blur-sm border border-white/10;
}
</style>
