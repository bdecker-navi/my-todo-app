import { defineEventHandler, createError } from 'h3'
import { users } from '~~/server/data/users'

export default defineEventHandler(async (event) => {
  // grab the `id` param from the URL
  const idParam = getRouterParam(event, 'id')
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
  console.log(`User fetched: ${JSON.stringify(user)}`)
  return user
})
