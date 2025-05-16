import { defineEventHandler, createError } from 'h3'
import { users } from '~~/server/data/users'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const idParam = query.id
  if (!idParam) {
    throw createError({ statusCode: 400, statusMessage: 'Missing user id' })
  }

  const id = Number(idParam)
  if (isNaN(id)) {
    throw createError({ statusCode: 400, statusMessage: 'Invalid user id' })
  }

  // fetch the user
  const user = users.find(user => user.id === id)

  if (!user) {
    throw createError({ statusCode: 404, statusMessage: 'User not found' })
  }

  return user
})
