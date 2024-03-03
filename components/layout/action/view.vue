<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-02-29 09:31:00
 * @LastEditTime: 2024-03-04 07:46:49
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \nuxtAdmin\components\layout\action\view.vue
-->

<template>
    <UModal v-model="isOpen" @open="handlerOpen" @close="handlerClose">
        <div class="p-4">
            view
            <div>{{ $route.params }}</div>
            <div>{{ $route.query }}</div>
            <UButton @click="isOpen = false">close</UButton>
        </div>
    </UModal>
</template>

<script setup>
const router = useRouter()
const isOpen = ref(true)
const handlerOpen = () => {
    console.log('open')
    isOpen.value = true
}
const handlerClose = () => {
    console.log('close')
    // router.back()
}

onMounted(() => {
    console.log('onMounted')
    isOpen.value = true
})
</script>
