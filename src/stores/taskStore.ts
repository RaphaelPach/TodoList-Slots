import { defineStore } from "pinia";
//Definição básica de uma store com Pinia
// A store é uma forma de gerenciar o estado da aplicação
// e compartilhar dados entre componentes.
// A store é uma função que retorna um objeto com o estado, getters e actions
// O estado é um objeto que contém as variáveis que queremos compartilhar
// Os getters são funções que retornam valores derivados do estado
// As actions são funções que podem modificar o estado ou executar outras ações
// A store pode ser usada em qualquer componente da aplicação
// Para usar a store em um componente, basta importar a store e chamá-la
// A store é criada com a função defineStore, que recebe um nome e um objeto com o estado, getters e actions
// O nome da store deve ser único na aplicação
export const useTaskStore = defineStore("task", {
    state: () => ({
        tasks: [] as string[],
    }),
    getters: {
        totalTasks: (state) => state.tasks.length,
    },
    actions: {
        addTask(task: string) {
            this.tasks.push(task);
        },
        removeTask(index: number) {
            this.tasks.splice(index, 1);
        },
    },
});