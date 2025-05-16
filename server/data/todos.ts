import type { Todo } from "~~/server/types/todo"

export const todos: Todo[] = [
  { id: 1, userId: 1, title: 'Buy groceries', completed: false },
  { id: 2, userId: 1, title: 'Walk the dog', completed: true },
  { id: 3, userId: 2, title: 'Finish Nuxt endpoint', completed: false },
  { id: 4, userId: 2, title: 'Read TypeScript handbook', completed: false },
  { id: 5, userId: 3, title: 'Plan weekend trip', completed: true }
]
