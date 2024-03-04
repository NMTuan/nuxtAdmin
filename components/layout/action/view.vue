<!--
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-02-29 09:31:00
 * @LastEditTime: 2024-03-04 09:38:32
 * @LastEditors: NMTuan
 * @Description: 
 * @FilePath: \nuxtAdmin\components\layout\action\view.vue
-->

<template>
    <UModal :model-value="isOpen" @close="handlerClose">
        <div class="p-4">
            view
            <div>{{ $route.params }}</div>
            <div>{{ $route.query }}</div>
            <UButton @click="handlerClose">close</UButton>
        </div>
    </UModal>
</template>

<script setup>
const router = useRouter()
const isOpen = ref(false)

const handlerClose = () => {
    isOpen.value = false
    router.back()
}

onMounted(() => {
    isOpen.value = true
})

</script>
