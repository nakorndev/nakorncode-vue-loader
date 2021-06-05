<template lang="pug">
  .section
    .container
      .buttons.is-centered.mb-5
        a.button.is-medium.is-success(@click="onCreateTodo") เพิ่มรายการสิ่งที
        // <a @click="onSave" class="button is-medium is-dark is-outlined">บันทึก</a>
        a.button.is-medium.is-danger.is-outlined(@click="onDelete") ลบ
      .columns.is-multiline
        .column.is-6(v-for="(todo, i) of todos" :key="i")
          TodoList(:index="i" :value="todo" @input="onTodoUpdated" @add-list="onTodoCreatedList")
</template>

<script>
import TodoList from './components/TodoList.vue'

export default {
  components: {
    TodoList
  },
  data () {
    return {
      todos: [
        []
      ]
    }
  },
  methods: {
    onCreateTodo () {
      this.todos.push([])
    },
    onTodoCreatedList () {
      console.log(new Date(), 'Added list')
    },
    onTodoUpdated (index, list) {
      this.todos[index] = list
      this.onSave()
    },
    onSave () {
      localStorage.setItem('todos', JSON.stringify(this.todos))
    },
    onDelete () {
      this.todos = [[]]
      localStorage.removeItem('todos')
    }
  },
  mounted () {
    const saveString = localStorage.getItem('todos')
    this.todos = JSON.parse(saveString) || [[]]
  },
}
</script>
