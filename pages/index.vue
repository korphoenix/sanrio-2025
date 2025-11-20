<template>
  <article>
    <h1>Index</h1>
    <h2>Queue Text: {{ value }}</h2>
  </article>
</template>

<script setup>
const { $supabase } = useNuxtApp()

const loading = ref(true)
const errorMessage = ref('')
const value = ref(null)

const fetchValue = async () => {
  loading.value = true
  errorMessage.value = ''

  const { data, error } = await $supabase
    .from('sanrio')
    .select('queue_text')
    .eq('id', 1)
    .single()

  console.log(data)

  if (error) {
    errorMessage.value = error.message
  } else {
    value.value = data?.queue_text || null
  }

  loading.value = false
}

onMounted(async () => {
  await fetchValue()
})

</script>
