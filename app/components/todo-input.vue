<script setup lang="ts">
import * as z from 'zod'
import type { FormSubmitEvent } from '@nuxt/ui'

const schema = z.object({
    todo: z.string()
})

type Schema = z.output<typeof schema>

const state = reactive<Partial<Schema>>({
    todo: undefined
})

const toast = useToast()
async function onSubmit(event: FormSubmitEvent<Schema>) {
    toast.add({ title: 'Success', description: 'The form has been submitted.', color: 'success' })
    console.log(event.data)
}
</script>

<template>
    <UForm
      :schema="schema"
      :state="state"
      @submit="onSubmit"
      class="flex items-center space-x-4 max-w-md mx-auto"
    >
      <UFormField name="todo" class="flex-1">
        <UInput v-model="state.todo" />
      </UFormField>
  
      <UButton type="submit" class="flex-shrink-0">
        Submit
      </UButton>
    </UForm>
  </template>
