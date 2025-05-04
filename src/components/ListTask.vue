<template>
  <div class="list-tasks">
    <div v-if="tasks.length === 0">
      Nenhuma tarefa ainda.
    </div>

    <ul v-else>
      <li v-for="(task, index) in tasks" :key="index" class="task-item">
        <span>{{ task }}</span>

        <!-- Slot para o botão de remover -->
        <slot name="remove-button" :index="index" :task="task">
          <button @click="store.removeTask(index)">Remover</button>
        </slot>

      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useTaskStore } from '../stores/taskStore'

const store = useTaskStore()

const tasks = computed(() => store.tasks)
</script>

<style scoped>
.list-tasks {
  margin-top: 20px;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  background: #f5f5f5;
  margin-bottom: 8px;
  padding: 10px;
  border-radius: 4px;

  /* Para separar o texto do botão */
  display: flex;
  justify-content: space-between;
  align-items: center;
}
button {
  background: crimson;
  color: white;
  border: none;
  padding: 6px 10px;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background: darkred;
}
</style>
