<script setup>
useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang: 'en'
  }
})
const title = 'TODO App'

useSeoMeta({
  title
})
</script>

<template>
  <UApp>
    <UHeader>
      <template #left>
        <div v-if="useRoute().name === 'todo-id'">
          <user-info />
        </div>
        <div v-else>
          <h1>Hello Stranger!</h1>
        </div>
      </template>

      <template #right>
        <UColorModeButton />
        <UButton
          icon="i-lucide-house"
          to="/"
        />
      </template>
    </UHeader>

    <UMain>
      <NuxtPage />
    </UMain>

    <USeparator icon="i-simple-icons-nuxtdotjs" />

    <UFooter />
  </UApp>
</template>
