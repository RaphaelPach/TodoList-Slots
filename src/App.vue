<template>
  <TaskLayout>
    <template #header>
      <h1>Mini Tarefas</h1>
    </template>

    <template #body>
      <AddTask />
      <ListTasks>
        <template #reSmove-button="{ index }">
          <button @click="store.removeTask(index)" class="btn-remover">
            ❌ Excluir
          </button>
        </template>
      </ListTasks>
    </template>

    <template #bottom>
      <small>Feito com 💙 usando Vue + Pinia</small>
    </template>
  </TaskLayout>
</template>

<script setup lang="ts">
import AddTask from './components/AddTask.vue'
import ListTasks from './components/ListTask.vue'
import TaskLayout from './components/TaskLayout.vue'
import { useTaskStore } from './stores/taskStore'

const store = useTaskStore()
</script>

<style scoped>
.btn-remover {
  background: transparent;
  color: crimson;
  border: 1px solid crimson;
  padding: 6px 10px;
  border-radius: 4px;
  cursor: pointer;
}
.btn-remover:hover {
  background: crimson;
  color: white;
}
</style>
