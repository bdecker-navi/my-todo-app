<script setup lang="ts">
import type { User } from '~~/server/types/types'

const { id } = useRoute().params
const toast = useToast()
const user = ref({} as User)

onMounted(async () => {
  await $fetch(`/api/user/${id}`, {
    method: 'GET',
    async onResponse({ response }) {
      if (!response.ok) {
        toast.add({
          title: 'Error Status: ' + response.status,
          description: response.statusText,
          color: 'error',
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
