import { createError, defineEventHandler } from 'h3'
import { todos } from '~~/server/data/todos'
import { users } from '~~/server/data/users'

export default defineEventHandler(async (event) => {
  const userIdParam = getRouterParam(event, 'userId')
  if (!userIdParam) {
    throw createError({ statusCode: 400, statusMessage: 'Missing userId' })
  }
  const userId = parseInt(userIdParam, 10)
  if (isNaN(userId)) {
    throw createError({ statusCode: 400, statusMessage: 'Invalid userId' })
  }

  const user = users.find(user => user.id === userId)

  if (!user) {
    throw createError({ statusCode: 404, statusMessage: 'User not found' })
  }

  return todos.filter(todo => todo.userId === userId)
})
