<template>
  <article class="p-6 min-h-screen flex items-center justify-center">
    <div class="bg-white rounded-lg p-6 w-full max-w-[400px]">
      <h1 class="text-[36px] font-bold mb-4 text-center">設定排隊序列</h1>
      <h2 class="text-[24px] mb-4">當前數值: {{ currentValue }}</h2>
      <div v-if="loading">處理中...</div>
      <div class="text-center" v-else>
        <label class="block mb-3">
          <input
            v-model="value"
            type="text"
            placeholder="請輸入排隊序列"
            class="border px-3 py-2 rounded w-full"
          />
        </label>
        <button
          class="px-4 py-2 rounded bg-black text-white"
          @click="updateValue"
        >
          儲存
        </button>
        <p v-if="message" class="mt-3">{{ message }}</p>
      </div>
    </div>
  </article>
</template>
<script setup>
const { $supabase } = useNuxtApp()

const value = ref('')
const loading = ref(false)
const message = ref('')
const currentValue = ref('')

// 讀取初始值
const fetchValue = async () => {
  loading.value = true
  message.value = ''

  const { data, error } = await $supabase
    .from('sanrio')
    .select('queue_text')
    .eq('id', 1)
    .single()

  currentValue.value = data?.queue_text || ''

  if (error) {
    message.value = '讀取失敗：' + error.message
  } else {
    value.value = data?.value || ''
  }

  loading.value = false
}

onMounted(fetchValue)

// 更新資料
const updateValue = async () => {
  loading.value = true
  message.value = ''

  const { error } = await $supabase
    .from('sanrio')
    .update({ queue_text: value.value || '0' })
    .eq('id', 1)

  if (error) {
    message.value = '更新失敗：' + error.message
  } else {
    message.value = '更新成功！'
    currentValue.value = value.value || '0'
  }

  loading.value = false
}
</script>

<style scoped lang="scss">

</style>
