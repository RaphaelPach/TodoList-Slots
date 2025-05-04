<template>
    <div class="add-task">
      <input 
        v-model="newTask"
        type="text"
        placeholder="Digite uma nova tarefa"
      />
      <button @click="handleAddTask">
        Adicionar
      </button>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import { useTaskStore } from '../stores/taskStore'
 //padrão de importação do pinia, pelo menos o básico
  const newTask = ref('')
  const store = useTaskStore()
  
  function handleAddTask() {
    if (newTask.value.trim() !== '') {
      store.addTask(newTask.value)
      newTask.value = ''
    }
  };
  </script>
  
  <style scoped>
  .add-task {
    display: flex;
    gap: 10px;
  }
  input {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  button {
    padding: 8px 12px;
    background-color: #5c6bc0;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  button:hover {
    background-color: #3949ab;
  }
  </style>
  