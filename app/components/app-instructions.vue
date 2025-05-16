<template>
  <div>
    <UPageSection>
      <UPageCTA
        title="Create your TODO List"
        description="
        For this project, you will be be using Nuxt to create a simple TODO list application.
        For this project you will need to:
        1. Create a new component to display the list of tasks TODO
        2. Make a request to fetch the list of tasks from the API
        3. Display the fetched tasks in the component
        "
        variant="subtle"
        :links="[{
          label: 'Nuxt UI Pro Documentation',
          to: 'https://ui.nuxt.com/components/app',
          target: '_blank',
          icon: 'i-lucide:braces',
          color: 'neutral'
        }, {
          label: 'TODO List Page',
          to: 'todo/1',
          icon: 'i-lucide-file-code',
          color: 'neutral'
        }]"
      />
    </UPageSection>
  </div>
</template>

<script setup lang="ts">
</script>
