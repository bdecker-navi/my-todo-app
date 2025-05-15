<script setup lang="ts">
const todos = ref([{
  id: 1,
  title: 'Buy groceries',
  completed: false
},
{
  id: 2,
  title: 'Clean the house',
  completed: true
}])
</script>

<template>
  <UPageList>
    <UPageCard
      v-for="todo in todos"
      :key="todo.id"
    >
      <template #body>
        {{ todo.title }}
      </template>
    </UPageCard>
  </UPageList>
</template>

<style scoped>

</style>
