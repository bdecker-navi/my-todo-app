<script setup lang="ts">
import type { User } from '~~/server/types/user'

const { id } = useRoute().params
const toast = useToast()
const user = ref({} as User | null)

onMounted(async () => {
  await $fetch(`/api/user?id=${id}`, {
    method: 'GET',
    async onResponse({ response }) {
      if (!response.ok) {
        toast.add({
          title: 'Error Status: ' + response.status,
          description: response.statusText,
          color: 'error'
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
    v-if="user"
    :name="user?.name"
    :description="user?.email"
    :avatar="{
      src: 'https://i.pravatar.cc/150?u=john-doe',
      icon: 'i-lucide-image'
    }"
  />
</template>
