<script setup lang="ts">
import type { User } from '~~/server/types/types'

const { id } = useRoute().params
const toast = useToast()
const user = ref({} as User)

onMounted(async () => {
  await $fetch(`/api/user/${id}`, {
    method: 'GET',
    onRequest() {
      console.log('Request started')
    },
    async onResponse({ response }) {
      if (!response.ok) {
        toast.add({
          title: 'Uh oh! Something went wrong. Status: ' + response.statusText,
          description: 'There was a problem with your request.'
        })
        return
      }
      user.value = response._data
    }
  }).catch((err) => {
    console.error('Fetch failed:', err)
  })
})
</script>

<template>
  <UUser
    :name="user?.name"
    :description="user?.email"
    :avatar="{
      src: 'https://i.pravatar.cc/150?u=john-doe',
      icon: 'i-lucide-image'
    }"
  />
</template>
